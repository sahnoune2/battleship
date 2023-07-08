function place02(event, cY, arrayB, player, title2, objectY, title1, cX) {
  function assign(text1, text2, text3, text4, text5, text6) {
    randomElement.style.backgroundColor = text1;
    player.textContent = text2;
    title2.style.backgroundColor = text3;
    title1.style.backgroundColor = text4;
    cX.clicked1 = text5;
    cY.clicked2 = text6;
  }
  let randomElement;
  do {
    const randomIndex = Math.floor(Math.random() * arrayB.length);
    randomElement = arrayB[randomIndex];
  } while (
    randomElement.style.backgroundColor === "green" ||
    randomElement.style.backgroundColor === "blue"
  );

  let index = arrayB.indexOf(randomElement);
  if (cY.clicked2 === false) {
    //when u dont guess the right spot//
    if (
      !randomElement.hasChildNodes() &&
      randomElement.style.backgroundColor !== "green"
    ) {
      assign("green", "player1's turn", "yellow", "", false, true);
    }
    //when u  guess the right spot//
    else if (
      randomElement.hasChildNodes() &&
      randomElement.style.backgroundColor !== "green" &&
      randomElement.style.backgroundColor !== "blue"
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

export { place02 };
