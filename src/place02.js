function placeO2(
  event,
  cY,
  arrayB,
  second,
  player,
  title2,
  objectY,
  title1,
  cX
) {
  let index = arrayB.indexOf(second);
  if (cY.clicked2 === false) {
    if (!second.hasChildNodes() && second.textContent !== null) {
      second.textContent = "O";
      player.textContent = "player1's turn";
      title1.style.backgroundColor = "yellow";
      title2.style.backgroundColor = "";

      cY.clicked2 = true;
      cX.clicked1 = false;
    } else if (
      second.hasChildNodes() &&
      second.textContent !== "O" &&
      second.style.backgroundColor !== "blue"
    ) {
      second.style.backgroundColor = "blue";

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

export { placeO2 };
