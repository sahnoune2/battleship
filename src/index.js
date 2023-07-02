import { placeX } from "./player1";
import { placeY } from "./player2";

const button = document.querySelector(".button");
const player = document.querySelector(".player");
const board1 = document.querySelector(".board1");
const board2 = document.querySelector(".board2");

let hasX = false;
let hasY = false;
let clicked1 = false;
let clicked2 = true;
let arrayRight = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99];
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

let oX = { cX: 0 };
let oY = { cY: 1 };
let oB = { cB: 0 };
let objectX = { countX: 0 };
let objectY = { countY: 0 };
let hide = false;
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
  player.textContent = "player1";
  const textX = document.querySelector(".textX");
  const textX1 = document.querySelector(".textX1");
  const textX2 = document.querySelector(".textX2");
  const textY = document.querySelector(".textY");
  const textY1 = document.querySelector(".textY1");
  const textY2 = document.querySelector(".textY2");
  textX.style.visibility = "hidden";
  textX1.style.visibility = "hidden";
  textX2.style.visibility = "hidden";
  textY.style.visibility = "hidden";
  textY1.style.visibility = "hidden";
  textY2.style.visibility = "hidden";

  button.disabled = true;

  for (let i = 0; i < arrayA.length; i++) {
    const first = arrayA[i];
    first.addEventListener("click", function (event) {
      player.textContent = "player2";
      placeO1(event, clicked1);
      clicked1 = true;
      clicked2 = false;
    });
  }

  for (let i = 0; i < arrayB.length; i++) {
    const second = arrayB[i];
    second.addEventListener("click", function (event) {
      player.textContent = "player1";
      placeO2(event, clicked2);

      clicked2 = true;
      clicked1 = false;
    });
  }
}

function placeO1(event, clicked1) {
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
function placeO2(event, clicked2) {
  let index = arrayB.indexOf(event.target);
  if (clicked2 === false) {
    if (event.target.textContent !== "Y" && event.target.textContent !== null) {
      event.target.textContent = "O";
    } else if (event.target.textContent === "Y") {
      const child = arrayB[index].firstElementChild;
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
