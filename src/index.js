const button = document.querySelector(".button");
const player = document.querySelector(".player");
const board1 = document.querySelector(".board1");
const board2 = document.querySelector(".board2");
const all = document.querySelector(".all");

let hasX = false;
let hasY = false;
let clicked1 = false;
let clicked2 = true;
let arrayRight = [9, 19, 29, 39, 49, 56, 69, 79, 89, 99];
let arrayLeft = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
let arrayA = [];
let arrayB = [];

for (let i = 0; i < 100; i++) {
  const cube = document.createElement("div");
  cube.classList.add(`cubeA`, `cube${i}`);
  arrayA[i] = cube;
  board1.appendChild(cube);
}
console.log(arrayA);
for (let i = 0; i < 100; i++) {
  const cube = document.createElement("div");
  cube.classList.add(`cubeB`, `cube${i}`);
  arrayB[i] = cube;
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

let countX = 0;
function placeX(event) {
  if (countX === 0) {
    const textX = document.createElement("div");
    event.target.appendChild(textX);
    textX.textContent = "X";
    console.log(event.target);
    textX.classList.add("textX");
    hasX = true;

    countX = 1;
    console.log(countX);
  } else if (countX === 1 && !event.target.hasChildNodes()) {
    const textX1 = document.createElement("div");
    const textX2 = document.createElement("div");
    let indexA = arrayA.indexOf(event.target);

    if (arrayRight.includes(indexA) && !arrayA[indexA - 1].hasChildNodes()) {
      arrayA[indexA].appendChild(textX1);
      arrayA[indexA - 1].appendChild(textX2);
      hasX = true;
      countX = 2;
    } else if (
      arrayA[indexA + 1].hasChildNodes() &&
      !arrayLeft.includes(indexA)
    ) {
      arrayA[indexA].appendChild(textX1);
      arrayA[indexA - 1].appendChild(textX2);
      hasX = true;
      countX = 2;
    } else if (
      arrayRight.includes(indexA) &&
      arrayA[indexA - 1].hasChildNodes()
    ) {
    } else if (
      arrayLeft.includes(indexA) &&
      !arrayA[indexA + 1].hasChildNodes()
    ) {
      arrayA[indexA].appendChild(textX1);
      arrayA[indexA + 1].appendChild(textX2);
      hasX = true;
      countX = 2;
    } else if (
      arrayLeft.includes(indexA) &&
      arrayA[indexA + 1].hasChildNodes()
    ) {
    } else {
      arrayA[indexA].appendChild(textX1);
      arrayA[indexA + 1].appendChild(textX2);
      hasX = true;
      countX = 2;
    }

    if (countX === 2) {
      textX1.textContent = "X";
      textX2.textContent = "X";
      textX1.classList.add("textX1");
      textX2.classList.add("textX2");

      player.textContent = "player2";

      board1.removeEventListener("click", placeX);
      board2.addEventListener("click", placeY);
    }
  }
}

function placeY(event) {
  if (!hasY && event.target.textContent !== "X") {
    const textY = document.createElement("div");
    event.target.appendChild(textY);
    console.log(arrayB.indexOf(event.target));
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
  const textX1 = document.querySelector(".textX1");
  const textX2 = document.querySelector(".textX2");
  const textY = document.querySelector(".textY");
  textX1.style.visibility = "hidden";
  textX2.style.visibility = "hidden";
  textY.style.visibility = "hidden";

  button.disabled = true;

  board1.addEventListener("click", function (event) {
    player.textContent = "player2";
    placeO1(event, textX1, textX2, clicked1);
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

function placeO1(event, textX1, textX2, clicked1) {
  let index = arrayA.indexOf(event.target);
  if (clicked1 === false) {
    if (event.target.textContent !== "X" && event.target.textContent !== null) {
      event.target.textContent = "O";
    } else if (event.target.textContent === "X") {
      const child = arrayA[index].firstElementChild;
      console.log(child.className);
      child.style.visibility = "visible";

      // setTimeout(() => {
      //   alert("player1 wins");
      // }, 500);
      // setTimeout(() => {
      //   location.reload();
      // }, 1000);
    }
  }
}
function placeO2(event, textY, clicked2) {
  let index = arrayA.indexOf(event.target);
  if (clicked2 === false) {
    if (event.target.textContent !== "Y" && event.target.textContent !== null) {
      event.target.textContent = "O";
    } else if (event.target.textContent === "Y") {
      const child = arrayA[index].firstElementChild;
      console.log(child.className);
      child.style.visibility = "visible";
      // setTimeout(() => {
      //   alert("player2 wins");
      // }, 500);
      // setTimeout(() => {
      //   location.reload();
      // }, 1000);
    }
  }
}

board1.addEventListener("click", placeX);
