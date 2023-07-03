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
  //first :X//
  if (objectX.countX === 0) {
    const textX = document.createElement("div");
    event.target.appendChild(textX);
    textX.textContent = "X";
    console.log(event.target);
    textX.classList.add("textX");
    hasX = true;

    objectX.countX = 1;
    //second :XX//
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
    }
  } else if (objectX.countX === 2 && !event.target.hasChildNodes()) {
    const textX3 = document.createElement("div");
    const textX4 = document.createElement("div");
    const textX5 = document.createElement("div");
    let indexA = arrayA.indexOf(event.target);
    //true
    if (
      arrayRight.includes(indexA) &&
      !arrayA[indexA - 1].hasChildNodes() &&
      !arrayA[indexA - 2].hasChildNodes()
    ) {
      arrayA[indexA].appendChild(textX3);
      arrayA[indexA - 1].appendChild(textX4);
      arrayA[indexA - 2].appendChild(textX5);
      hasX = true;
      objectX.countX = 3;
    } else if (
      arrayA[indexA + 1].hasChildNodes() &&
      !arrayLeft.includes(indexA) &&
      !arrayLeft.includes(indexA - 1) &&
      !arrayA[indexA - 1].hasChildNodes() &&
      !arrayA[indexA - 2].hasChildNodes()
    ) {
      arrayA[indexA].appendChild(textX3);
      arrayA[indexA - 1].appendChild(textX4);
      arrayA[indexA - 2].appendChild(textX5);
      hasX = true;
      objectX.countX = 3;
    } else if (
      arrayRight.includes(indexA) &&
      arrayA[indexA - 1].hasChildNodes()
    ) {
    } else if (
      arrayLeft.includes(indexA) &&
      !arrayA[indexA + 1].hasChildNodes() &&
      !arrayA[indexA + 2].hasChildNodes()
    ) {
      arrayA[indexA].appendChild(textX3);
      arrayA[indexA + 1].appendChild(textX4);
      arrayA[indexA + 2].appendChild(textX5);
      hasX = true;
      objectX.countX = 3;
    } else if (
      arrayLeft.includes(indexA) &&
      arrayA[indexA + 1].hasChildNodes()
    ) {
    } else if (
      (arrayRight.includes(indexA) && !arrayA[indexA - 1].hasChildNodes()) ||
      (arrayA[indexA + 1].hasChildNodes() && !arrayLeft.includes(indexA)) ||
      (arrayRight.includes(indexA) && arrayA[indexA - 1].hasChildNodes()) ||
      (arrayLeft.includes(indexA) && !arrayA[indexA + 1].hasChildNodes()) ||
      (arrayLeft.includes(indexA) && arrayA[indexA + 1].hasChildNodes())
    ) {
    } else {
      arrayA[indexA].appendChild(textX3);
      arrayA[indexA + 1].appendChild(textX4);
      arrayA[indexA + 2].appendChild(textX5);
      hasX = true;
      objectX.countX = 3;
    }

    if (objectX.countX === 3) {
      textX3.textContent = "X";
      textX4.textContent = "X";
      textX5.textContent = "X";
      textX3.classList.add("textX3");
      textX4.classList.add("textX4");
      textX5.classList.add("textX5");

      player.textContent = "player2's turn";
      oX.cX = 1;
      oY.cY = 0;
    }
  }
}

export { placeX };
