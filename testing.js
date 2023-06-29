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
if (arrayLeft.includes(indexA) && !arrayA[indexA + 1].hasChildNodes()) {
  arrayA[indexA].appendChild(textX1);
  arrayA[indexA + 1].appendChild(textX2);
  hasX = true;
  countX = 2;
} else if (arrayA[indexA + 1].hasChildNodes() && !arrayLeft.includes(indexA)) {
  arrayA[indexA].appendChild(textX1);
  arrayA[indexA - 1].appendChild(textX2);
  hasX = true;
  countX = 2;
} else if (arrayRight.includes(indexA) && arrayA[indexA - 1].hasChildNodes()) {
}
