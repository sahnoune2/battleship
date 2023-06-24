const { doc } = require("prettier");

const board = document.querySelector(".board");
const button = document.createElement("button");
button.classList.add("button");
button.textContent = "button";
document.body.appendChild(button);
for (let i = 0; i < 9; i++) {
  const cube = document.createElement("div");
  cube.classList.add(`cube${i}`);
  board.appendChild(cube);
}

let hasX = false;
let hasY = false;

function placeX(event) {
  if (!hasX) {
    const textX = document.createElement("div");
    event.target.appendChild(textX);
    textX.textContent = "X";
    textX.classList.add("textX");
    hasX = true;
    board.removeEventListener("click", placeX);
    board.addEventListener("click", placeY);
  }
}

function placeY(event) {
  if (!hasY && event.target.textContent !== "X") {
    const textY = document.createElement("div");
    event.target.appendChild(textY);
    textY.textContent = "Y";
    textY.classList.add("textY");
    hasY = true;
    board.removeEventListener("click", placeY);
  }
  button.addEventListener("click", HideMarks);
}

function HideMarks() {
  const textX = document.querySelector(".textX");
  const textY = document.querySelector(".textY");
  textX.style.visibility = "hidden";
  textY.style.visibility = "hidden";
  button.disabled = true;
  board.addEventListener("click", function (event) {
    placeO(event, textX, textY);
  });
}
function placeO(event, textX, textY) {
  if (
    event.target.textContent !== "X" &&
    event.target.textContent !== null &&
    event.target.textContent !== "Y"
  ) {
    event.target.textContent = "O";
  } else if (event.target.textContent === "X") {
    textX.style.visibility = "visible";
  } else if (event.target.textContent === "Y") {
    textY.style.visibility = "visible";
  }
}
board.addEventListener("click", placeX);
