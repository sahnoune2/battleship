import { placeX } from "./player1";
import { placeY } from "./player2";

const button = document.querySelector(".button");
const player = document.querySelector(".player");
const board1 = document.querySelector(".board1");
const board2 = document.querySelector(".board2");

const title1 = document.querySelector(".title1");
const title2 = document.querySelector(".title2");

let hasX = false;
let hasY = false;
let cX = { clicked1: false };
let cY = { clicked2: true };
let arrayRight = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99];
let arrayLeft = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
let arrayA = [];
let arrayB = [];
let oX = { cX: 0 };
let oY = { cY: 1 };
let oB = { cB: 0 };
let objectX = { countX: 0 };
let objectY = { countY: 0 };
let hide = false;

const fragmentA = document.createDocumentFragment();
const fragmentB = document.createDocumentFragment();

for (let i = 0; i < 100; i++) {
  const cube = document.createElement("div");
  cube.classList.add(`cubeA`, `cube${i}`);
  arrayA[i] = cube;
  fragmentA.appendChild(cube);
}
board1.appendChild(fragmentA);

console.log(fragmentA);
for (let i = 0; i < 100; i++) {
  const cube = document.createElement("div");
  cube.classList.add(`cubeB`, `cube${i}`);
  arrayB[i] = cube;
  fragmentB.appendChild(cube);
}
board2.appendChild(fragmentB);

for (let i = 0; i < arrayA.length; i++) {
  const first = arrayA[i];
  first.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "yellow";
  });
}

for (let i = 0; i < arrayA.length; i++) {
  const first = arrayA[i];
  first.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "";
  });
}

for (let i = 0; i < arrayB.length; i++) {
  const second = arrayB[i];
  second.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "blue";
  });
}

for (let i = 0; i < arrayB.length; i++) {
  const second = arrayB[i];
  second.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "";
  });
}

// function placeX(event) {
//   if (countX === 0) {
//     const textX = document.createElement("div");
//     event.target.appendChild(textX);
//     textX.textContent = "X";
//     console.log(event.target);
//     textX.classList.add("textX");
//     hasX = true;

//     countX = 1;
//     console.log(countX);
//   } else if (countX === 1 && !event.target.hasChildNodes()) {
//     const textX1 = document.createElement("div");
//     const textX2 = document.createElement("div");
//     let indexA = arrayA.indexOf(event.target);

//     if (arrayRight.includes(indexA) && !arrayA[indexA - 1].hasChildNodes()) {
//       arrayA[indexA].appendChild(textX1);
//       arrayA[indexA - 1].appendChild(textX2);
//       hasX = true;
//       countX = 2;
//     } else if (
//       arrayA[indexA + 1].hasChildNodes() &&
//       !arrayLeft.includes(indexA)
//     ) {
//       arrayA[indexA].appendChild(textX1);
//       arrayA[indexA - 1].appendChild(textX2);
//       hasX = true;
//       countX = 2;
//     } else if (
//       arrayRight.includes(indexA) &&
//       arrayA[indexA - 1].hasChildNodes()
//     ) {
//     } else if (
//       arrayLeft.includes(indexA) &&
//       !arrayA[indexA + 1].hasChildNodes()
//     ) {
//       arrayA[indexA].appendChild(textX1);
//       arrayA[indexA + 1].appendChild(textX2);
//       hasX = true;
//       countX = 2;
//     } else if (
//       arrayLeft.includes(indexA) &&
//       arrayA[indexA + 1].hasChildNodes()
//     ) {
//     } else {
//       arrayA[indexA].appendChild(textX1);
//       arrayA[indexA + 1].appendChild(textX2);
//       hasX = true;
//       countX = 2;
//     }

//     if (countX === 2) {
//       textX1.textContent = "X";
//       textX2.textContent = "X";
//       textX1.classList.add("textX1");
//       textX2.classList.add("textX2");

//       player.textContent = "player2";
//       oX.cX = 1;
//       oY.cY = 0;
//     }
//   }
// }

// function placeY(event) {
//   if (!hasY && event.target.textContent !== "X") {
//     const textY = document.createElement("div");
//     event.target.appendChild(textY);
//     textY.textContent = "Y";
//     console.log(event.target);
//     textY.classList.add("textY");
//     hasY = true;

//     countY = 1;
//     console.log(countY);
//   } else if (countY === 1 && !event.target.hasChildNodes()) {
//     const textY1 = document.createElement("div");
//     const textY2 = document.createElement("div");
//     let indexA = arrayB.indexOf(event.target);

//     if (arrayRight.includes(indexA) && !arrayB[indexA - 1].hasChildNodes()) {
//       arrayB[indexA].appendChild(textY1);
//       arrayB[indexA - 1].appendChild(textY2);
//       hasY = true;
//       countY = 2;
//     } else if (
//       arrayB[indexA + 1].hasChildNodes() &&
//       !arrayLeft.includes(indexA)
//     ) {
//       arrayB[indexA].appendChild(textY1);
//       arrayB[indexA - 1].appendChild(textY2);
//       hasY = true;
//       countY = 2;
//     } else if (
//       arrayRight.includes(indexA) &&
//       arrayB[indexA - 1].hasChildNodes()
//     ) {
//     } else if (
//       arrayLeft.includes(indexA) &&
//       !arrayB[indexA + 1].hasChildNodes()
//     ) {
//       arrayB[indexA].appendChild(textY1);
//       arrayB[indexA + 1].appendChild(textY2);
//       hasY = true;
//       countY = 2;
//     } else if (
//       arrayLeft.includes(indexA) &&
//       arrayB[indexA + 1].hasChildNodes()
//     ) {
//     } else {
//       arrayB[indexA].appendChild(textY1);
//       arrayB[indexA + 1].appendChild(textY2);
//       hasY = true;
//       countY = 2;
//     }

//     if (countY === 2) {
//       textY1.textContent = "Y";
//       textY2.textContent = "Y";
//       textY1.classList.add("textY1");
//       textY2.classList.add("textY2");

//       player.textContent = "begin";
//       oX.cX = 0;
//       oY.cY = 1;
//       oB.cB = 1;
//     }
//   }
// }

function HideMarks() {
  player.textContent = "player1's turn";
  const textX = document.querySelector(".textX");
  const textX1 = document.querySelector(".textX1");
  const textX2 = document.querySelector(".textX2");
  const textX3 = document.querySelector(".textX3");
  const textX4 = document.querySelector(".textX4");
  const textX5 = document.querySelector(".textX5");
  const textY = document.querySelector(".textY");
  const textY1 = document.querySelector(".textY1");
  const textY2 = document.querySelector(".textY2");
  const textY3 = document.querySelector(".textY3");
  const textY4 = document.querySelector(".textY4");
  const textY5 = document.querySelector(".textY5");
  textX.style.visibility = "hidden";
  textX1.style.visibility = "hidden";
  textX2.style.visibility = "hidden";
  textX3.style.visibility = "hidden";
  textX4.style.visibility = "hidden";
  textX5.style.visibility = "hidden";
  textY.style.visibility = "hidden";
  textY1.style.visibility = "hidden";
  textY2.style.visibility = "hidden";
  textY3.style.visibility = "hidden";
  textY4.style.visibility = "hidden";
  textY5.style.visibility = "hidden";

  button.disabled = true;
  title1.style.backgroundColor = "yellow";

  for (let i = 0; i < arrayA.length; i++) {
    const first = arrayA[i];
    first.addEventListener("click", function (event) {
      placeO1(event, cX);
    });
  }

  for (let i = 0; i < arrayB.length; i++) {
    const second = arrayB[i];
    second.addEventListener("click", function (event) {
      placeO2(event, cY);
    });
  }
}

function placeO1(event, cX) {
  let index = arrayA.indexOf(event.target);
  if (cX.clicked1 === false) {
    if (
      event.target.textContent !== "X" &&
      event.target.textContent !== null &&
      event.target.textContent !== "O"
    ) {
      event.target.textContent = "O";
      player.textContent = "player2's turn";
      title2.style.backgroundColor = "blue";
      title1.style.backgroundColor = "";
      cX.clicked1 = true;
      cY.clicked2 = false;
    } else if (
      event.target.textContent === "X" &&
      event.target.textContent !== "O"
    ) {
      const child = arrayA[index].firstElementChild;
      console.log(child.className);
      child.style.visibility = "visible";
      player.textContent = "player2's turn";
      title2.style.backgroundColor = "blue";
      title1.style.backgroundColor = "";
      cX.clicked1 = true;
      cY.clicked2 = false;
      objectX.countX += 1;
    }
    if (objectX.countX === 9) {
      setTimeout(() => {
        alert("player1 wins");
      }, 500);
      setTimeout(() => {
        location.reload();
      }, 1000);
    }
  }
}
function placeO2(event, cY) {
  let index = arrayB.indexOf(event.target);
  if (cY.clicked2 === false) {
    if (
      event.target.textContent !== "Y" &&
      event.target.textContent !== null &&
      event.target.textContent !== "O"
    ) {
      event.target.textContent = "O";
      player.textContent = "player1's turn";
      title1.style.backgroundColor = "yellow";
      title2.style.backgroundColor = "";

      cY.clicked2 = true;
      cX.clicked1 = false;
    } else if (
      event.target.textContent === "Y" &&
      event.target.textContent !== "O"
    ) {
      const child = arrayB[index].firstElementChild;
      console.log(child.className);
      child.style.visibility = "visible";
      player.textContent = "player1's turn";
      title1.style.backgroundColor = "yellow";
      title2.style.backgroundColor = "";
      cY.clicked2 = true;
      cX.clicked1 = false;
      objectY.countY += 1;
    }
    if (objectY.countY === 9) {
      setTimeout(() => {
        alert("player2 wins");
      }, 500);
      setTimeout(() => {
        location.reload();
      }, 1000);
    }
  }
}

button.addEventListener("click", function () {
  if (oB.cB === 1) {
    HideMarks();
  }
});

for (let i = 0; i < arrayA.length; i++) {
  const first = arrayA[i];
  first.addEventListener("click", function () {
    if (oX.cX === 0) {
      placeX(
        event,
        objectX,
        hasX,
        arrayA,
        arrayRight,
        arrayLeft,
        player,
        oX,
        oY
      );
    }
  });
}
for (let i = 0; i < arrayB.length; i++) {
  const second = arrayB[i];
  second.addEventListener("click", function () {
    if (oY.cY === 0) {
      placeY(
        event,
        objectY,
        hasY,
        arrayB,
        arrayRight,
        arrayLeft,
        player,
        oX,
        oY,
        oB
      );
    }
  });
}
