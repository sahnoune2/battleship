import { placeO1 } from "./place01";
import { placeO2 } from "./place02";
import { placeX } from "./player1";
import { placeY } from "./player2";
//select elements from the dom//
const button = document.querySelector(".button");
const player = document.querySelector(".player");
const board1 = document.querySelector(".board1");
const board2 = document.querySelector(".board2");
const title1 = document.querySelector(".title1");
const title2 = document.querySelector(".title2");

//initilizing varibales,arrays,objects//
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

////////functions////////

//function to build boards//
function build(array, fragment, board) {
  for (let i = 0; i < 100; i++) {
    const cube = document.createElement("div");
    cube.classList.add(`cubeA`, `cube${i}`);
    array[i] = cube;
    fragment.appendChild(cube);
  }
  board.appendChild(fragment);
}

//hiding the marks function and begin placing functions//
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
  ////player2 guessing on board1////
  for (let i = 0; i < arrayA.length; i++) {
    const first = arrayA[i];
    first.addEventListener("click", function (event) {
      placeO1(event, cX, arrayA, first, player, title2, objectX, title1, cY);
    });
  }
  ////player1 guessing on board2////
  for (let i = 0; i < arrayB.length; i++) {
    const second = arrayB[i];
    second.addEventListener("click", function (event) {
      placeO2(event, cY, arrayB, second, player, title2, objectY, title1, cX);
    });
  }
}

////////// game begins//////////

//building first board//
build(arrayA, fragmentA, board1);

//building second board//
build(arrayB, fragmentB, board2);

//player 1 places his ships//
for (let i = 0; i < arrayA.length; i++) {
  const first = arrayA[i];
  placeX(
    event,
    objectX,
    arrayA,
    arrayRight,
    arrayLeft,
    player,
    oX,
    oY,
    first,
    objectY,
    arrayB,
    oB
  );
}

//player 2 places his ships//
// for (let i = 0; i < arrayB.length; i++) {
//   const second = arrayB[i];
//   placeY(
//     event,
//     objectY,
//     arrayB,
//     arrayRight,
//     arrayLeft,
//     player,
//     oX,
//     oY,
//     oB,
//     second
//   );
// }

//begin the game by hiding the ships and start guessing//
button.addEventListener("click", function () {
  if (oB.cB === 1) {
    HideMarks();
  }
});
