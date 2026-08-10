document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.querySelector(".search-btn");
  const usernameInput = document.getElementById("user-input");
  const statsContainer = document.querySelector(".stats-container");
  const easyProgressCircle = document.querySelector(".easy-circle");
  const mediumProgressCircle = document.querySelector(".medium-circle");
  const hardProgressCircle = document.querySelector(".hard-circle");
  const easyLabel = document.getElementsByClassName("easy-label")[0];
  const mediumLabel = document.getElementsByClassName("medium-label")[0];
  const hardLabel = document.getElementsByClassName("hard-label")[0];
  const cardStatsContainer = document.querySelector(".stats-cards");

  //return true or false based on a regex
  function validetrUsername(username) {
    if (username.trim() === "") {
      Toastify({
        text: "Username should not be empty",
        className: "info",
        style: {
          background: "linear-gradient(to right, #970000, #233308)",
        },
      }).showToast();

      return false;
    }

    const regex = /^[a-zA-Z0-9_-]{1,15}$/;
    const isMatching = regex.test(username);
    if (!isMatching) {
      Toastify({
        text: "Invalid Username",
        className: "info",
        style: {
          background: "linear-gradient(to right, #970000, #233308)",
        },
      }).showToast();
    }
    return isMatching;
  }

  // fetch user data
  async function fetchUserDetails(username) {
    const url = `https://alfa-leetcode-api.onrender.com/${username}/profile`;
    try {
      searchButton.textContent = "Searching...";
      searchButton.disabled = true;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Unable to fetch the User details");
      }
      const parsedData = await response.json();
      displayUserData(parsedData);
      statsContainer.style.setProperty("display", "block");
    } catch (error) {
      statsContainer.innerHTML = `<p>No data Found!${error.message}</p>`;
    } finally {
      searchButton.textContent = "Search";
      searchButton.disabled = false;
    }
  }

  // update progress br
  function updateProgress(solved, total, label, circle) {
    const progressDeg = (solved / total) * 100;

    circle.style.setProperty("--progress-degree", `${progressDeg}%`);
    label.textContent = `${solved}/${total}`;
  }
  // display data
  function displayUserData(parsedData) {
    
    const totalQAll = parsedData.totalQuestions;
    const totalQEasy = parsedData.totalEasy;
    const totalQMedium = parsedData.totalMedium;
    const totalQHard = parsedData.totalHard;

    const solvedTotalQ = parsedData.matchedUserStats.acSubmissionNum[0].count;
    const solvedTotalEasyQ =
      parsedData.matchedUserStats.acSubmissionNum[1].count;
    const solvedTotalMediumQ =
      parsedData.matchedUserStats.acSubmissionNum[2].count;
    const solvedTotalHardQ =
      parsedData.matchedUserStats.acSubmissionNum[3].count;      

    updateProgress(solvedTotalEasyQ, totalQEasy, easyLabel, easyProgressCircle);
    updateProgress(
      solvedTotalMediumQ,
      totalQMedium,
      mediumLabel,
      mediumProgressCircle,
    );
    updateProgress(solvedTotalHardQ, totalQHard, hardLabel, hardProgressCircle);

    const cardsData = [
      {
        label: "Overall Submissions",
        value: parsedData.matchedUserStats.totalSubmissionNum[0].submissions,
      },
      {
        label: "Overall Easy Submissions",
        value: parsedData.matchedUserStats.totalSubmissionNum[1].submissions,
      },
      {
        label: "Overall Medium Submissions",
        value: parsedData.matchedUserStats.totalSubmissionNum[2].submissions,
      },
      {
        label: "Overall Hard Submissions",
        value: parsedData.matchedUserStats.totalSubmissionNum[3].submissions,
      },
    ];

    cardStatsContainer.innerHTML = cardsData.map(
      data=>{
        return `<div class="card">
        <h4>${data.label}</h4>
        <p>${data.value}</p>
      </div>`;
      }
      ).join("")

  }

  searchButton.addEventListener("click", function () {
    const username = usernameInput.value;
    if (validetrUsername(username)) {
      statsContainer.style.setProperty("display", "none");
      fetchUserDetails(username);
    }
  });
});
