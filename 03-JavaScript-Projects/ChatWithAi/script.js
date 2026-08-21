const prompt = document.querySelector("#prompt");
const chatConatainer = document.querySelector(".chat-container");



let user ={
    data:null
}



const createChatBox=(html,classes)=>{
    let div = document.createElement("div")
    div.innerHTML=html
    div.classList.add(classes)

    return div
}


const handleChatResponse = (message) => {
  let htmlUser = ` <i class="fa-mosaic fa-solid fa-user" id="userIcon"></i>
            <div class="user-chat-area">
                ${message}
            </div>`;

    prompt.value=""

let userChatBox = createChatBox(htmlUser, "user-chat-box");

chatConatainer.appendChild(userChatBox);

setTimeout(() => {
    let htmlAi = `
     <i class="fa-solid fa-robot" id="aiIcon"></i>
            <div class="ai-chat-area">
           <img src="loading.gif" id="load" alt="loading..." width="200px" style="border-radius: 10rem 10rem 10rem 10rem; height: 50px; object-fit: cover; background-color: transparent; opacity: 0.4;">
            </div>
    `;

    let aiChatBox = createChatBox(htmlAi, "ai-chat-box");
    chatConatainer.appendChild(aiChatBox)
    generateResponse(aiChatBox)

}, 600);

};

prompt.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleChatResponse(prompt.value);
  }
});
