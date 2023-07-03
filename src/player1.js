function placeX(
  event,
  objectX,
  hasX,
  arrayA,
  arrayRight,
  arrayLeft,
  player,
  oX,
  oY
) {
  if (objectX.countX === 0) {
    const textX = document.createElement("div");
    event.target.appendChild(textX);
    textX.textContent = "X";
    console.log(event.target);
    textX.classList.add("textX");
    hasX = true;

    objectX.countX = 1;
  } else if (objectX.countX === 1 && !event.target.hasChildNodes()) {
    const textX1 = document.createElement("div");
    const textX2 = document.createElement("div");
    let indexA = arrayA.indexOf(event.target);

    if (arrayRight.includes(indexA) && !arrayA[indexA - 1].hasChildNodes()) {
      arrayA[indexA].appendChild(textX1);
      arrayA[indexA - 1].appendChild(textX2);
      hasX = true;
      objectX.countX = 2;
    } else if (
      arrayA[indexA + 1].hasChildNodes() &&
      !arrayLeft.includes(indexA)
    ) {
      arrayA[indexA].appendChild(textX1);
      arrayA[indexA - 1].appendChild(textX2);
      hasX = true;
      objectX.countX = 2;
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
      objectX.countX = 2;
    } else if (
      arrayLeft.includes(indexA) &&
      arrayA[indexA + 1].hasChildNodes()
    ) {
    } else {
      arrayA[indexA].appendChild(textX1);
      arrayA[indexA + 1].appendChild(textX2);
      hasX = true;
      objectX.countX = 2;
    }

    if (objectX.countX === 2) {
      textX1.textContent = "X";
      textX2.textContent = "X";
      textX1.classList.add("textX1");
      textX2.classList.add("textX2");

      player.textContent = "player2's turn";
      oX.cX = 1;
      oY.cY = 0;
    }
  }
}

export { placeX };
