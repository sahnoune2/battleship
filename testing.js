function placeO(event, textX, textY) {
  if (player.textContent === "player1") {
    player.textContent = "player2";
  } else if (player.textContent === "player2") {
    player.textContent = "player1";
  }
  if (
    event.target.textContent !== "X" &&
    event.target.textContent !== null &&
    event.target.textContent !== "Y"
  ) {
    event.target.textContent = "O";
  } else if (event.target.textContent === "X") {
    textX.style.visibility = "visible";
  } else if (event.target.textContent === "Y") {
    textY.style.visibility = "visible";
  }
  if (event.target.textContent === "X") {
    alert("player1 wins");
  } else if (event.target.textContent === "Y") {
    alert("player2 wins");
  }
}
