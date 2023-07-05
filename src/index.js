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
  const elementsB = document.querySelectorAll(
    '[style="background-color: blue;"]'
  );

  for (let i = 0; i < elementsB.length; i++) {
    elementsY[i].style.backgroundColor = "white";
    elementsB[i].style.backgroundColor = "white";
  }
  console.log(elementsY);
  console.log(elementsB);

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
    if (!event.target.hasChildNodes() && event.target.textContent !== null) {
      event.target.textContent = "O";
      player.textContent = "player2's turn";
      title2.style.backgroundColor = "blue";
      title1.style.backgroundColor = "";
      cX.clicked1 = true;
      cY.clicked2 = false;
    } else if (
      event.target.hasChildNodes() &&
      event.target.textContent !== "O" &&
      event.target.style.backgroundColor !== "red"
    ) {
      event.target.style.backgroundColor = "red";
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

  first.addEventListener("mouseover", function () {
    if (oX.cX === 0) {
      //first :X//
      if (objectX.countX === 0) {
        event.target.style.backgroundColor = "yellow";
      }
      //second :XX//
      else if (objectX.countX === 1 && !event.target.hasChildNodes()) {
        let indexA = arrayA.indexOf(event.target);
        //right//
        if (
          arrayRight.includes(indexA) &&
          !arrayA[indexA - 1].hasChildNodes()
        ) {
          arrayA[indexA].style.backgroundColor = "yellow";
          arrayA[indexA - 1].style.backgroundColor = "yellow";
        }

        //right//
        else if (
          arrayRight.includes(indexA) &&
          arrayA[indexA - 1].hasChildNodes()
        ) {
        }

        //left//
        else if (
          arrayLeft.includes(indexA) &&
          !arrayA[indexA + 1].hasChildNodes()
        ) {
          arrayA[indexA].style.backgroundColor = "yellow";
          arrayA[indexA + 1].style.backgroundColor = "yellow";
        }
        //left//
        else if (
          arrayLeft.includes(indexA) &&
          arrayA[indexA + 1].hasChildNodes()
        ) {
        }
        //aa//
        else if (
          arrayA[indexA + 1].hasChildNodes() &&
          !arrayLeft.includes(indexA)
        ) {
          arrayA[indexA].style.backgroundColor = "yellow";
          arrayA[indexA - 1].style.backgroundColor = "yellow";
        }
        //aa//
        else {
          arrayA[indexA].style.backgroundColor = "yellow";
          arrayA[indexA + 1].style.backgroundColor = "yellow";
        }
      }
      // third : XXX//
      else if (objectX.countX === 2 && !event.target.hasChildNodes()) {
        let indexA = arrayA.indexOf(event.target);
        //right//
        if (
          arrayRight.includes(indexA) &&
          !arrayA[indexA - 1].hasChildNodes() &&
          !arrayA[indexA - 2].hasChildNodes()
        ) {
          arrayA[indexA].style.backgroundColor = "yellow";
          arrayA[indexA - 1].style.backgroundColor = "yellow";
          arrayA[indexA - 2].style.backgroundColor = "yellow";
        }
        //right//
        else if (
          (arrayRight.includes(indexA) && arrayA[indexA - 1].hasChildNodes()) ||
          (arrayRight.includes(indexA) &&
            !arrayA[indexA - 1].hasChildNodes()) ||
          arrayRight.includes(indexA + 1)
        ) {
        }

        //left//
        else if (
          arrayLeft.includes(indexA) &&
          !arrayA[indexA + 1].hasChildNodes() &&
          !arrayA[indexA + 2].hasChildNodes()
        ) {
          arrayA[indexA].style.backgroundColor = "yellow";
          arrayA[indexA + 1].style.backgroundColor = "yellow";
          arrayA[indexA + 2].style.backgroundColor = "yellow";
        }
        //left//
        else if (
          (arrayLeft.includes(indexA) && arrayA[indexA + 1].hasChildNodes()) ||
          (arrayLeft.includes(indexA) && !arrayA[indexA + 1].hasChildNodes())
        ) {
        }
        //aa//
        else if (
          arrayA[indexA + 1].hasChildNodes() &&
          !arrayLeft.includes(indexA) &&
          !arrayLeft.includes(indexA - 1) &&
          !arrayA[indexA - 1].hasChildNodes() &&
          !arrayA[indexA - 2].hasChildNodes()
        ) {
          arrayA[indexA].style.backgroundColor = "yellow";
          arrayA[indexA - 1].style.backgroundColor = "yellow";
          arrayA[indexA - 2].style.backgroundColor = "yellow";
        }
        //aa//
        else if (
          (arrayA[indexA + 1].hasChildNodes() &&
            !arrayA[indexA + 2].hasChildNodes()) ||
          arrayA[indexA + 2].hasChildNodes()
        ) {
        }

        //aa//
        else {
          arrayA[indexA].style.backgroundColor = "yellow";
          arrayA[indexA + 1].style.backgroundColor = "yellow";
          arrayA[indexA + 2].style.backgroundColor = "yellow";
        }
      }
    }
  });
  first.addEventListener("mouseout", function () {
    if (oX.cX === 0) {
      //first :X//
      if (objectX.countX === 0) {
        event.target.style.backgroundColor = "";
      }
      //second :XX//
      else if (objectX.countX === 1 && !event.target.hasChildNodes()) {
        let indexA = arrayA.indexOf(event.target);
        //right//
        if (
          arrayRight.includes(indexA) &&
          !arrayA[indexA - 1].hasChildNodes()
        ) {
          arrayA[indexA].style.backgroundColor = "";
          arrayA[indexA - 1].style.backgroundColor = "";
        }

        //right//
        else if (
          arrayRight.includes(indexA) &&
          arrayA[indexA - 1].hasChildNodes()
        ) {
        }

        //left//
        else if (
          arrayLeft.includes(indexA) &&
          !arrayA[indexA + 1].hasChildNodes()
        ) {
          arrayA[indexA].style.backgroundColor = "";
          arrayA[indexA + 1].style.backgroundColor = "";
        }
        //left//
        else if (
          arrayLeft.includes(indexA) &&
          arrayA[indexA + 1].hasChildNodes()
        ) {
        }
        //aa//
        else if (
          arrayA[indexA + 1].hasChildNodes() &&
          !arrayLeft.includes(indexA)
        ) {
          arrayA[indexA].style.backgroundColor = "";
          arrayA[indexA - 1].style.backgroundColor = "";
        }
        //aa//
        else {
          arrayA[indexA].style.backgroundColor = "";
          arrayA[indexA + 1].style.backgroundColor = "";
        }
      }
      // third : XXX//
      else if (objectX.countX === 2 && !event.target.hasChildNodes()) {
        let indexA = arrayA.indexOf(event.target);
        //right//
        if (
          arrayRight.includes(indexA) &&
          !arrayA[indexA - 1].hasChildNodes() &&
          !arrayA[indexA - 2].hasChildNodes()
        ) {
          arrayA[indexA].style.backgroundColor = "";
          arrayA[indexA - 1].style.backgroundColor = "";
          arrayA[indexA - 2].style.backgroundColor = "";
        }
        //right//
        else if (
          (arrayRight.includes(indexA) && arrayA[indexA - 1].hasChildNodes()) ||
          (arrayRight.includes(indexA) &&
            !arrayA[indexA - 1].hasChildNodes()) ||
          arrayRight.includes(indexA + 1)
        ) {
        }

        //left//
        else if (
          arrayLeft.includes(indexA) &&
          !arrayA[indexA + 1].hasChildNodes() &&
          !arrayA[indexA + 2].hasChildNodes()
        ) {
          arrayA[indexA].style.backgroundColor = "";
          arrayA[indexA + 1].style.backgroundColor = "";
          arrayA[indexA + 2].style.backgroundColor = "";
        }
        //left//
        else if (
          (arrayLeft.includes(indexA) && arrayA[indexA + 1].hasChildNodes()) ||
          (arrayLeft.includes(indexA) && !arrayA[indexA + 1].hasChildNodes())
        ) {
        }
        //aa//
        else if (
          arrayA[indexA + 1].hasChildNodes() &&
          !arrayLeft.includes(indexA) &&
          !arrayLeft.includes(indexA - 1) &&
          !arrayA[indexA - 1].hasChildNodes() &&
          !arrayA[indexA - 2].hasChildNodes()
        ) {
          arrayA[indexA].style.backgroundColor = "";
          arrayA[indexA - 1].style.backgroundColor = "";
          arrayA[indexA - 2].style.backgroundColor = "";
        }
        //aa//
        else if (
          (arrayA[indexA + 1].hasChildNodes() &&
            !arrayA[indexA + 2].hasChildNodes()) ||
          arrayA[indexA + 2].hasChildNodes()
        ) {
        }

        //aa//
        else {
          arrayA[indexA].style.backgroundColor = "";
          arrayA[indexA + 1].style.backgroundColor = "";
          arrayA[indexA + 2].style.backgroundColor = "";
        }
      }
    }
  });

  first.addEventListener("click", function () {
    if (oX.cX === 0) {
      placeX(event, objectX, arrayA, arrayRight, arrayLeft, player, oX, oY);
    }
  });
}
for (let i = 0; i < arrayB.length; i++) {
  const second = arrayB[i];
  second.addEventListener("mouseover", function () {
    if (oY.cY === 0) {
      //first :X//
      if (objectY.countY === 0) {
        event.target.style.backgroundColor = "yellow";
      }
      //second :XX//
      else if (objectY.countY === 1 && !event.target.hasChildNodes()) {
        let indexA = arrayB.indexOf(event.target);
        //right//
        if (
          arrayRight.includes(indexA) &&
          !arrayB[indexA - 1].hasChildNodes()
        ) {
          arrayB[indexA].style.backgroundColor = "yellow";
          arrayB[indexA - 1].style.backgroundColor = "yellow";
        }

        //right//
        else if (
          arrayRight.includes(indexA) &&
          arrayB[indexA - 1].hasChildNodes()
        ) {
        }

        //left//
        else if (
          arrayLeft.includes(indexA) &&
          !arrayB[indexA + 1].hasChildNodes()
        ) {
          arrayB[indexA].style.backgroundColor = "yellow";
          arrayB[indexA + 1].style.backgroundColor = "yellow";
        }
        //left//
        else if (
          arrayLeft.includes(indexA) &&
          arrayB[indexA + 1].hasChildNodes()
        ) {
        }
        //aa//
        else if (
          arrayB[indexA + 1].hasChildNodes() &&
          !arrayLeft.includes(indexA)
        ) {
          arrayB[indexA].style.backgroundColor = "yellow";
          arrayB[indexA - 1].style.backgroundColor = "yellow";
        }
        //aa//
        else {
          arrayB[indexA].style.backgroundColor = "yellow";
          arrayB[indexA + 1].style.backgroundColor = "yellow";
        }
      }
      // third : XXX//
      else if (objectY.countY === 2 && !event.target.hasChildNodes()) {
        let indexA = arrayB.indexOf(event.target);
        //right//
        if (
          arrayRight.includes(indexA) &&
          !arrayB[indexA - 1].hasChildNodes() &&
          !arrayB[indexA - 2].hasChildNodes()
        ) {
          arrayB[indexA].style.backgroundColor = "yellow";
          arrayB[indexA - 1].style.backgroundColor = "yellow";
          arrayB[indexA - 2].style.backgroundColor = "yellow";
        }
        //right//
        else if (
          (arrayRight.includes(indexA) && arrayB[indexA - 1].hasChildNodes()) ||
          (arrayRight.includes(indexA) &&
            !arrayB[indexA - 1].hasChildNodes()) ||
          arrayRight.includes(indexA + 1)
        ) {
        }

        //left//
        else if (
          arrayLeft.includes(indexA) &&
          !arrayB[indexA + 1].hasChildNodes() &&
          !arrayB[indexA + 2].hasChildNodes()
        ) {
          arrayB[indexA].style.backgroundColor = "yellow";
          arrayB[indexA + 1].style.backgroundColor = "yellow";
          arrayB[indexA + 2].style.backgroundColor = "yellow";
        }
        //left//
        else if (
          (arrayLeft.includes(indexA) && arrayB[indexA + 1].hasChildNodes()) ||
          (arrayLeft.includes(indexA) && !arrayB[indexA + 1].hasChildNodes())
        ) {
        }
        //aa//
        else if (
          arrayB[indexA + 1].hasChildNodes() &&
          !arrayLeft.includes(indexA) &&
          !arrayLeft.includes(indexA - 1) &&
          !arrayB[indexA - 1].hasChildNodes() &&
          !arrayB[indexA - 2].hasChildNodes()
        ) {
          arrayB[indexA].style.backgroundColor = "yellow";
          arrayB[indexA - 1].style.backgroundColor = "yellow";
          arrayB[indexA - 2].style.backgroundColor = "yellow";
        }
        //aa//
        else if (
          (arrayB[indexA + 1].hasChildNodes() &&
            !arrayB[indexA + 2].hasChildNodes()) ||
          arrayB[indexA + 2].hasChildNodes()
        ) {
        }

        //aa//
        else {
          arrayB[indexA].style.backgroundColor = "yellow";
          arrayB[indexA + 1].style.backgroundColor = "yellow";
          arrayB[indexA + 2].style.backgroundColor = "yellow";
        }
      }
    }
  });
  second.addEventListener("mouseout", function () {
    if (oY.cY === 0) {
      //first :X//
      if (objectY.countY === 0) {
        event.target.style.backgroundColor = "";
      }
      //second :XX//
      else if (objectY.countY === 1 && !event.target.hasChildNodes()) {
        let indexA = arrayB.indexOf(event.target);
        //right//
        if (
          arrayRight.includes(indexA) &&
          !arrayB[indexA - 1].hasChildNodes()
        ) {
          arrayB[indexA].style.backgroundColor = "";
          arrayB[indexA - 1].style.backgroundColor = "";
        }

        //right//
        else if (
          arrayRight.includes(indexA) &&
          arrayB[indexA - 1].hasChildNodes()
        ) {
        }

        //left//
        else if (
          arrayLeft.includes(indexA) &&
          !arrayB[indexA + 1].hasChildNodes()
        ) {
          arrayB[indexA].style.backgroundColor = "";
          arrayB[indexA + 1].style.backgroundColor = "";
        }
        //left//
        else if (
          arrayLeft.includes(indexA) &&
          arrayB[indexA + 1].hasChildNodes()
        ) {
        }
        //aa//
        else if (
          arrayB[indexA + 1].hasChildNodes() &&
          !arrayLeft.includes(indexA)
        ) {
          arrayB[indexA].style.backgroundColor = "";
          arrayB[indexA - 1].style.backgroundColor = "";
        }
        //aa//
        else {
          arrayB[indexA].style.backgroundColor = "";
          arrayB[indexA + 1].style.backgroundColor = "";
        }
      }
      // third : XXX//
      else if (objectY.countY === 2 && !event.target.hasChildNodes()) {
        let indexA = arrayB.indexOf(event.target);
        //right//
        if (
          arrayRight.includes(indexA) &&
          !arrayB[indexA - 1].hasChildNodes() &&
          !arrayB[indexA - 2].hasChildNodes()
        ) {
          arrayB[indexA].style.backgroundColor = "";
          arrayB[indexA - 1].style.backgroundColor = "";
          arrayB[indexA - 2].style.backgroundColor = "";
        }
        //right//
        else if (
          (arrayRight.includes(indexA) && arrayB[indexA - 1].hasChildNodes()) ||
          (arrayRight.includes(indexA) &&
            !arrayB[indexA - 1].hasChildNodes()) ||
          arrayRight.includes(indexA + 1)
        ) {
        }

        //left//
        else if (
          arrayLeft.includes(indexA) &&
          !arrayB[indexA + 1].hasChildNodes() &&
          !arrayB[indexA + 2].hasChildNodes()
        ) {
          arrayB[indexA].style.backgroundColor = "";
          arrayB[indexA + 1].style.backgroundColor = "";
          arrayB[indexA + 2].style.backgroundColor = "";
        }
        //left//
        else if (
          (arrayLeft.includes(indexA) && arrayB[indexA + 1].hasChildNodes()) ||
          (arrayLeft.includes(indexA) && !arrayB[indexA + 1].hasChildNodes())
        ) {
        }
        //aa//
        else if (
          arrayB[indexA + 1].hasChildNodes() &&
          !arrayLeft.includes(indexA) &&
          !arrayLeft.includes(indexA - 1) &&
          !arrayB[indexA - 1].hasChildNodes() &&
          !arrayB[indexA - 2].hasChildNodes()
        ) {
          arrayB[indexA].style.backgroundColor = "";
          arrayB[indexA - 1].style.backgroundColor = "";
          arrayB[indexA - 2].style.backgroundColor = "";
        }
        //aa//
        else if (
          (arrayB[indexA + 1].hasChildNodes() &&
            !arrayB[indexA + 2].hasChildNodes()) ||
          arrayB[indexA + 2].hasChildNodes()
        ) {
        }

        //aa//
        else {
          arrayB[indexA].style.backgroundColor = "";
          arrayB[indexA + 1].style.backgroundColor = "";
          arrayB[indexA + 2].style.backgroundColor = "";
        }
      }
    }
  });
  second.addEventListener("click", function () {
    if (oY.cY === 0) {
      placeY(event, objectY, arrayB, arrayRight, arrayLeft, player, oX, oY, oB);
    }
  });
}
