function placeO1(
  event,
  cX,
  arrayA,
  first,
  player,
  title2,
  objectX,
  title1,
  cY
) {
  if (cX.clicked1 === false) {
    if (!first.hasChildNodes() && first.textContent !== null) {
      first.textContent = "O";
      player.textContent = "player2's turn";
      title2.style.backgroundColor = "blue";
      title1.style.backgroundColor = "";
      cX.clicked1 = true;
      cY.clicked2 = false;
    } else if (
      first.hasChildNodes() &&
      first.textContent !== "O" &&
      first.style.backgroundColor !== "red"
    ) {
      first.style.backgroundColor = "red";
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

export { placeO1 };
