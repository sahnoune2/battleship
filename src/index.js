const button = document.querySelector(".button");

const player = document.querySelector(".player");

const board1 = document.querySelector(".board1");

const board2 = document.querySelector(".board2");

let hasX = false;
let hasY = false;
let clicked1 = false;
let clicked2 = false;

function placeX(event) {
  if (!hasX) {
    const textX = document.createElement("div");
    event.target.appendChild(textX);
    textX.textContent = "X";
    textX.classList.add("textX");
    hasX = true;
    player.textContent = "player2";

    board1.removeEventListener("click", placeX);
    board2.addEventListener("click", placeY);
  }
}

function placeY(event) {
  if (!hasY && event.target.textContent !== "X") {
    const textY = document.createElement("div");
    event.target.appendChild(textY);
    textY.textContent = "Y";
    textY.classList.add("textY");
    hasY = true;
    player.textContent = "begin";
    board2.removeEventListener("click", placeY);
  }
  button.addEventListener("click", HideMarks);
}

function HideMarks() {
  player.textContent = "player1";
  const textX = document.querySelector(".textX");
  const textY = document.querySelector(".textY");
  textX.style.visibility = "hidden";
  textY.style.visibility = "hidden";

  button.disabled = true;

  board1.addEventListener("click", function (event) {
    player.textContent = "player2";
    placeO1(event, textX, clicked1);
    clicked1 = true;
    clicked2 = false;
  });
  board2.addEventListener("click", function (event) {
    player.textContent = "player1";
    placeO2(event, textY, clicked2);

    clicked2 = true;
    clicked1 = false;
  });
}

function placeO1(event, textX, clicked1) {
  if (clicked1 === false) {
    if (event.target.textContent !== "X" && event.target.textContent !== null) {
      event.target.textContent = "O";
    } else if (event.target.textContent === "X") {
      textX.style.visibility = "visible";
      alert("player1 wins");
      location.reload();
    }
  }
}
function placeO2(event, textY, clicked2) {
  if (clicked2 === false) {
    if (event.target.textContent !== "Y" && event.target.textContent !== null) {
      event.target.textContent = "O";
    } else if (event.target.textContent === "Y") {
      textY.style.visibility = "visible";
      alert("player2 wins");
      location.reload();
    }
  }
}

board1.addEventListener("click", placeX);
