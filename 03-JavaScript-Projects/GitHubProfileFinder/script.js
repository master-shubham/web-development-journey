document.addEventListener("DOMContentLoaded",function(){

    // container
    const profileContainer = document.querySelector(".profile-container");
    const socialStatistics = document.querySelector(".social-Statistics");
    const containerLoading = document.querySelector(".container-loading");

  // input box
  const inputText = document.querySelector(".input-text");
  const searchBtn = document.querySelector(".search-btn");

  // profile details
  const profileAvatar = document.querySelector(".profile-avatar");
  const profileName = document.querySelector(".profile-name");
  const profileUsername = document.querySelector(".profile-username");
  const profileBio = document.querySelector(".profile-bio");

  // profile link
  const linkLocation = document.querySelector(".link-location");
  const linkGithub = document.querySelector(".link-github");
  const linkDate = document.querySelector(".link-date");

  // profile social Statistics
  const socialFollowers = document.querySelector(".social-followers");
  const socialFollowing = document.querySelector(".social-following");
  const socialRepositories = document.querySelector(".social-repositories");
  const socialPublicGists = document.querySelector(".social-publicGists");


    //return true or false based on a regex
  function validetrUsername(username) {
    if (username.trim() === "") {
      Toastify({
        text: "Username should not be empty",
        className: "info",
        style: {
          background: "linear-gradient(to right, #9aeced, #13a4a7)",
          color:"black"
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
          background: "linear-gradient(to right, #9aeced, #13a4a7)",
          color: "black",
        },
      }).showToast();
    }
    return isMatching;
  }

   
  //display user information
  function displayUserDetails(userData) {
    
    profileAvatar.src = userData.avatar_url;
    profileName.textContent = userData.name;
    profileUsername.textContent = `@${userData.login}`;
    profileBio.textContent = userData.bio

    linkLocation.textContent = userData.location ? userData.location : "Null";
    linkGithub.href = userData.html_url ? userData.html_url : "#";

    let date = new Date(userData.created_at);

    linkDate.textContent = `Joined ${date.toDateString()}`

    socialFollowers.textContent = userData.followers;
    socialFollowing.textContent = userData.following;
    socialRepositories.textContent = userData.public_repos;
    socialPublicGists.textContent = userData.public_gists;
    
  }

  // fetch the data from github api
  async function fetchUserDetails(username) {
    const URL = "https://api.github.com/users";
    try {
      const response = await fetch(`${URL}/${username}`);
      if (!response.ok) {

        // alert for error
        Toastify({
          text: "Internal server error",
          className: "info",
          style: {
            background: "linear-gradient(to right, #9aeced, #13a4a7)",
            color: "black",
          },
        }).showToast();
        containerLoading.style.setProperty("display", "none");
        return;
      }

      const data = await response.json();
      //hide loading
      containerLoading.style.setProperty("display", "none");
      displayUserDetails(data);
      inputText.value = "";
      profileContainer.style.setProperty("display", "flex");
      socialStatistics.style.setProperty("display", "flex");
    } catch (error) {
        
    }
  }

    searchBtn.addEventListener("click",function(){
        const username = inputText.value;
        
        if (validetrUsername(username)) {
            //display loading
             containerLoading.style.setProperty("display", "block");
            fetchUserDetails(username) 
        }
        
    })


})