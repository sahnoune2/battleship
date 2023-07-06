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
  //function to assign the colors //
  function assign(text1, text2, text3, text4, text5, text6) {
    first.style.backgroundColor = text1;
    player.textContent = text2;
    title2.style.backgroundColor = text3;
    title1.style.backgroundColor = text4;
    cX.clicked1 = text5;
    cY.clicked2 = text6;
  }
  if (cX.clicked1 === false) {
    //when u dont guess the right spot//
    if (!first.hasChildNodes() && first.style.backgroundColor !== "green") {
      assign("green", "player2's turn", "blue", "", true, false);
    }
    //when u  guess the right spot//
    else if (
      first.hasChildNodes() &&
      first.style.backgroundColor !== "green" &&
      first.style.backgroundColor !== "red"
    ) {
      assign("red", "player2's turn", "blue", "", true, false);
      objectX.countX += 1;
    }
    //declaring the winner//
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
