const button = document.querySelector(".button");
const player = document.querySelector(".player");
const board1 = document.querySelector(".board1");
const board2 = document.querySelector(".board2");
const all = document.querySelector(".all");

let hasX = false;
let hasY = false;
let clicked1 = false;
let clicked2 = true;

for (let i = 0; i < 100; i++) {
  const cube = document.createElement("div");
  cube.classList.add("cube1");
  board1.appendChild(cube);
}
for (let i = 0; i < 100; i++) {
  const cube = document.createElement("div");
  cube.classList.add("cube2");
  board2.appendChild(cube);
}

board1.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "yellow";
});
board1.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "";
});
board2.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "red";
});
board2.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "";
});

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
    button.addEventListener("click", HideMarks);
  }
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

      setTimeout(() => {
        alert("player1 wins");
      }, 500);
      setTimeout(() => {
        location.reload();
      }, 1000);
    }
  }
}
function placeO2(event, textY, clicked2) {
  if (clicked2 === false) {
    if (event.target.textContent !== "Y" && event.target.textContent !== null) {
      event.target.textContent = "O";
    } else if (event.target.textContent === "Y") {
      textY.style.visibility = "visible";
      setTimeout(() => {
        alert("player2 wins");
      }, 500);
      setTimeout(() => {
        location.reload();
      }, 1000);
    }
  }
}

board1.addEventListener("click", placeX);
