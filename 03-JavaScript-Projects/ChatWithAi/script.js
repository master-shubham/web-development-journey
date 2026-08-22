const prompt = document.querySelector("#prompt");
const chatConatainer = document.querySelector(".chat-container");
const imgBtn = document.querySelector("#img");
const imgInput = document.querySelector("#img input");
const imgIMG = document.querySelector("#img img");
const imgFavIcon = document.querySelector("#img i");

const API_KEY = "" // add api key here

const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;
let user = {
  message: null || "",
  file: {
    mime_type: null,
    data: null,
  },
};

async function generateResponse(aiChatBox) {
  let textAiArea = aiChatBox.querySelector(".ai-chat-area");

  try {
    let RequestOption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: user.message || "" },
              ...(user.file?.data ? [{ inline_data: user.file }] : []),
            ],
          },
        ],
      }),
    };

    let response = await fetch(API_URL, RequestOption);
    let data = await response.json();

    if (!response.ok) {
      // Inspect the console to see exact server response
      console.error("API Error 400 Details:", data.error?.message || data);
      return;
    }

    let apiResponse = data.candidates[0].content.parts[0].text
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .trim();

    textAiArea.innerHTML = apiResponse;
  } catch (error) {
    console.error("Network Error:", error);
  } finally {
    chatConatainer.scrollTo({
      top: chatConatainer.scrollHeight,
      behavior: "smooth",
    });

      imgIMG.src = "";
      imgIMG.classList.remove("chooseIMG");
      imgFavIcon.classList.remove("favicon-img");
      user.file={}
  }
}

const createChatBox = (html, classes) => {
  let div = document.createElement("div");
  div.innerHTML = html;
  div.classList.add(classes);

  return div;
};

const handleChatResponse = (message) => {
  user.message = message;
  let htmlUser = ` <i class="fa-mosaic fa-solid fa-user" id="userIcon"></i>
            <div class="user-chat-area">
                ${user.message}
                ${user.file.data ? `<img src="data:${user.file.mime_type};base64,${user.file.data}" alt="image..." class="chooseimg" />`:""}
            </div>`;

  prompt.value = "";

  let userChatBox = createChatBox(htmlUser, "user-chat-box");

  chatConatainer.appendChild(userChatBox);

  chatConatainer.scrollTo({
    top: chatConatainer.scrollHeight,
    behavior: "smooth",
  });

  setTimeout(() => {
    let htmlAi = `
     <i class="fa-solid fa-robot" id="aiIcon"></i>
            <div class="ai-chat-area">
           <img src="loading.gif" id="load" alt="loading..." width="200px" style="border-radius: 10rem 10rem 10rem 10rem; height: 50px; object-fit: cover; background-color: transparent; opacity: 0.4;">
            </div>
    `;

    let aiChatBox = createChatBox(htmlAi, "ai-chat-box");
    chatConatainer.appendChild(aiChatBox);
    generateResponse(aiChatBox);
  }, 600);
};

prompt.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleChatResponse(prompt.value);
  }
});

imgInput.addEventListener("change", () => {
  const file = imgInput.files[0];
  if (!file) return;
  let reader = new FileReader();
  reader.onload = (e) => {
    let base64string = e.target.result.split(",")[1];
    user.file = {
      mime_type: file.type,
      data: base64string,
    };
    imgIMG.src=`data:${user.file.mime_type};base64,${user.file.data}`;
    imgIMG.classList.add("chooseIMG")
    imgFavIcon.classList.add("favicon-img");

  };

  reader.readAsDataURL(file);


});

imgBtn.addEventListener("click", () => {
  imgBtn.querySelector("input").click();
});
