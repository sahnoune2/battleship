// function placeX(event) {
//   if (!hasX) {
//     const textX = document.createElement("div");
//     event.target.appendChild(textX);
//     textX.textContent = "X";
//     textX.classList.add("textX");
//     hasX = true;
//     player.textContent = "player2";

//     board1.removeEventListener("click", placeX);
//     board2.addEventListener("click", placeY);
//   }
// }
// let countX = 0;
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
