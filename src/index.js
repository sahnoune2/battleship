import { placeO1 } from "./place01";
import { placeO2 } from "./place02";

import { placeX } from "./player1";
import { placeY } from "./player2";

const button = document.querySelector(".button");
const player = document.querySelector(".player");
const board1 = document.querySelector(".board1");
const board2 = document.querySelector(".board2");
const title1 = document.querySelector(".title1");
const title2 = document.querySelector(".title2");

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

function HideMarks() {
  const elementsY = document.querySelectorAll(
    '[style="background-color: yellow;"]'
  );

  for (let i = 0; i < elementsY.length; i++) {
    elementsY[i].style.backgroundColor = "white";
  }
  console.log(elementsY);

  button.disabled = true;
  title1.style.backgroundColor = "yellow";

  for (let i = 0; i < arrayA.length; i++) {
    const first = arrayA[i];
    first.addEventListener("click", function (event) {
      placeO1(event, cX, arrayA, first, player, title2, objectX, title1, cY);
    });
  }

  for (let i = 0; i < arrayB.length; i++) {
    const second = arrayB[i];
    second.addEventListener("click", function (event) {
      placeO2(event, cY, arrayB, second, player, title2, objectY, title1, cX);
    });
  }
}

button.addEventListener("click", function () {
  if (oB.cB === 1) {
    HideMarks();
  }
});

for (let i = 0; i < arrayA.length; i++) {
  const first = arrayA[i];
  placeX(event, objectX, arrayA, arrayRight, arrayLeft, player, oX, oY, first);
}
for (let i = 0; i < arrayB.length; i++) {
  const second = arrayB[i];
  placeY(
    event,
    objectY,
    arrayB,
    arrayRight,
    arrayLeft,
    player,
    oX,
    oY,
    oB,
    second
  );
}
