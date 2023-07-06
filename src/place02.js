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
  //function to assign the colors //
  function assign(text1, text2, text3, text4, text5, text6) {
    second.style.backgroundColor = text1;
    player.textContent = text2;
    title2.style.backgroundColor = text3;
    title1.style.backgroundColor = text4;
    cX.clicked1 = text5;
    cY.clicked2 = text6;
  }
  let index = arrayB.indexOf(second);
  if (cY.clicked2 === false) {
    //when u dont guess the right spot//
    if (!second.hasChildNodes() && second.style.backgroundColor !== "green") {
      assign("green", "player1's turn", "yellow", "", false, true);
    }
    //when u  guess the right spot//
    else if (
      second.hasChildNodes() &&
      second.style.backgroundColor !== "green" &&
      second.style.backgroundColor !== "blue"
    ) {
      assign("blue", "player1's turn", "yellow", "", false, true);
      objectY.countY += 1;
    }
    //declaring the winner//
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
