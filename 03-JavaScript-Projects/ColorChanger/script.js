let btnList = document.querySelector(".btn-list");
let container = document.querySelector(".container");
let heading = document.querySelector(".heading");
let btnColor = document.querySelectorAll(".btn-color");
let currText = document.querySelector(".curr-text");
let currColorText = document.querySelector(".curr-color-text");
let btnReset = document.querySelector(".btn-reset");

function buttonColorChange(className, action) {
  for (let i = 0; i < btnColor.length; i++) {
    btnColor[i].classList[action](className);
  }
}

const changeColor = (event) => {
    let colorDataSet = event.target.dataset.color;
  if (event.target.classList.contains("btn-color")) {
    if (colorDataSet === "black") {
      heading.classList.add("black-custom");
      currText.classList.add("black-custom");
      buttonColorChange("btnColor-custom", "add");
      btnReset.classList.add("btnColor-custom");
    } else {
        heading.classList.remove("black-custom");
        currText.classList.remove("black-custom");
        buttonColorChange("btnColor-custom", "remove");
        btnReset.classList.remove("btnColor-custom");
    }
    
    container.style.backgroundColor = colorDataSet;
    currColorText.textContent = colorDataSet;
}
};
btnReset.addEventListener("click", (e) => {
    container.style.backgroundColor = "white";
    currColorText.textContent = `White`;
    heading.classList.remove("black-custom");
    currText.classList.remove("black-custom");
    btnReset.classList.remove("btnColor-custom");
    buttonColorChange("btnColor-custom", "remove");
});

btnList.addEventListener("click", changeColor);
