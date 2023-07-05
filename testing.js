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

// for (let i = 0; i < arrayA.length; i++) {
//   const first = arrayA[i];
//   first.addEventListener("mouseover", (event) => {
//     event.target.style.backgroundColor = "yellow";
//   });
// }

// for (let i = 0; i < arrayA.length; i++) {
//   const first = arrayA[i];
//   first.addEventListener("mouseout", (event) => {
//     event.target.style.backgroundColor = "";
//   });
// }

// for (let i = 0; i < arrayB.length; i++) {
//   const second = arrayB[i];
//   second.addEventListener("mouseover", (event) => {
//     event.target.style.backgroundColor = "blue";
//   });
// }

// for (let i = 0; i < arrayB.length; i++) {
//   const second = arrayB[i];
//   second.addEventListener("mouseout", (event) => {
//     event.target.style.backgroundColor = "";
//   });
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

  first.addEventListener("mouseover", function () {
    if (oX.cX === 0) {
      //first :X//
      if (objectX.countX === 0) {
        const textX = document.createElement("div");
        event.target.appendChild(textX);
        event.target.style.backgroundColor = "yellow";
        textX.style.backgroundColor = "yellow";
        console.log(event.target);
        textX.classList.add("textX");
      }
      //second :XX//
      else if (objectX.countX === 1 && !event.target.hasChildNodes()) {
        const textX1 = document.createElement("div");
        const textX2 = document.createElement("div");
        let indexA = arrayA.indexOf(event.target);
        //right//
        if (
          arrayRight.includes(indexA) &&
          !arrayA[indexA - 1].hasChildNodes()
        ) {
          arrayA[indexA].appendChild(textX1);
          arrayA[indexA - 1].appendChild(textX2);

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
          arrayA[indexA].appendChild(textX1);
          arrayA[indexA + 1].appendChild(textX2);

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
          arrayA[indexA].appendChild(textX1);
          arrayA[indexA - 1].appendChild(textX2);

          arrayA[indexA].style.backgroundColor = "yellow";
          arrayA[indexA - 1].style.backgroundColor = "yellow";
        }
        //aa//
        else {
          arrayA[indexA].appendChild(textX1);
          arrayA[indexA + 1].appendChild(textX2);

          arrayA[indexA].style.backgroundColor = "yellow";
          arrayA[indexA + 1].style.backgroundColor = "yellow";
        }
        if (objectX.countX === 2) {
          textX1.style.backgroundColor = "yellow";
          textX2.style.backgroundColor = "yellow";

          textX1.classList.add("textX1");
          textX2.classList.add("textX2");
        }
      }
      // third : XXX//
      else if (objectX.countX === 2 && !event.target.hasChildNodes()) {
        const textX3 = document.createElement("div");
        const textX4 = document.createElement("div");
        const textX5 = document.createElement("div");
        let indexA = arrayA.indexOf(event.target);
        //right//
        if (
          arrayRight.includes(indexA) &&
          !arrayA[indexA - 1].hasChildNodes() &&
          !arrayA[indexA - 2].hasChildNodes()
        ) {
          arrayA[indexA].appendChild(textX3);
          arrayA[indexA - 1].appendChild(textX4);
          arrayA[indexA - 2].appendChild(textX5);

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
          arrayA[indexA].appendChild(textX3);
          arrayA[indexA + 1].appendChild(textX4);
          arrayA[indexA + 2].appendChild(textX5);

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
          arrayA[indexA].appendChild(textX3);
          arrayA[indexA - 1].appendChild(textX4);
          arrayA[indexA - 2].appendChild(textX5);

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
          arrayA[indexA].appendChild(textX3);
          arrayA[indexA + 1].appendChild(textX4);
          arrayA[indexA + 2].appendChild(textX5);

          arrayA[indexA].style.backgroundColor = "yellow";
          arrayA[indexA + 1].style.backgroundColor = "yellow";
          arrayA[indexA + 2].style.backgroundColor = "yellow";
        }

        if (objectX.countX === 3) {
          textX3.classList.add("textX3");
          textX4.classList.add("textX4");
          textX5.classList.add("textX5");

          player.textContent = "player2's turn";
          oX.cX = 1;
          oY.cY = 0;
        }
      }
    }
  });
  first.addEventListener("mouseout", function () {
    if (oX.cX === 0) {
      //first :X//
      if (objectX.countX === 0) {
        const textX = document.createElement("div");
        event.target.appendChild(textX);
        event.target.style.backgroundColor = "";
        textX.style.backgroundColor = "";
        console.log(event.target);
        textX.classList.add("textX");
      }
      //second :XX//
      else if (objectX.countX === 1 && !event.target.hasChildNodes()) {
        const textX1 = document.createElement("div");
        const textX2 = document.createElement("div");
        let indexA = arrayA.indexOf(event.target);
        //right//
        if (
          arrayRight.includes(indexA) &&
          !arrayA[indexA - 1].hasChildNodes()
        ) {
          arrayA[indexA].appendChild(textX1);
          arrayA[indexA - 1].appendChild(textX2);

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
          arrayA[indexA].appendChild(textX1);
          arrayA[indexA + 1].appendChild(textX2);

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
          arrayA[indexA].appendChild(textX1);
          arrayA[indexA - 1].appendChild(textX2);

          arrayA[indexA].style.backgroundColor = "";
          arrayA[indexA - 1].style.backgroundColor = "";
        }
        //aa//
        else {
          arrayA[indexA].appendChild(textX1);
          arrayA[indexA + 1].appendChild(textX2);

          arrayA[indexA].style.backgroundColor = "";
          arrayA[indexA + 1].style.backgroundColor = "";
        }
        if (objectX.countX === 2) {
          textX1.style.backgroundColor = "";
          textX2.style.backgroundColor = "";

          textX1.classList.add("textX1");
          textX2.classList.add("textX2");
        }
      }
      // third : XXX//
      else if (objectX.countX === 2 && !event.target.hasChildNodes()) {
        const textX3 = document.createElement("div");
        const textX4 = document.createElement("div");
        const textX5 = document.createElement("div");
        let indexA = arrayA.indexOf(event.target);
        //right//
        if (
          arrayRight.includes(indexA) &&
          !arrayA[indexA - 1].hasChildNodes() &&
          !arrayA[indexA - 2].hasChildNodes()
        ) {
          arrayA[indexA].appendChild(textX3);
          arrayA[indexA - 1].appendChild(textX4);
          arrayA[indexA - 2].appendChild(textX5);

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
          arrayA[indexA].appendChild(textX3);
          arrayA[indexA + 1].appendChild(textX4);
          arrayA[indexA + 2].appendChild(textX5);

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
          arrayA[indexA].appendChild(textX3);
          arrayA[indexA - 1].appendChild(textX4);
          arrayA[indexA - 2].appendChild(textX5);

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
          arrayA[indexA].appendChild(textX3);
          arrayA[indexA + 1].appendChild(textX4);
          arrayA[indexA + 2].appendChild(textX5);

          arrayA[indexA].style.backgroundColor = "";
          arrayA[indexA + 1].style.backgroundColor = "";
          arrayA[indexA + 2].style.backgroundColor = "";
        }

        if (objectX.countX === 3) {
          textX3.classList.add("textX3");
          textX4.classList.add("textX4");
          textX5.classList.add("textX5");

          player.textContent = "player2's turn";
          oX.cX = 1;
          oY.cY = 0;
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
  second.addEventListener("click", function () {
    if (oY.cY === 0) {
      placeY(event, objectY, arrayB, arrayRight, arrayLeft, player, oX, oY, oB);
    }
  });
}
