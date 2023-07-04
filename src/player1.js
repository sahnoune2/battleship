function placeX(event, objectX, arrayA, arrayRight, arrayLeft, player, oX, oY) {
  //first :X//
  if (objectX.countX === 0) {
    const textX = document.createElement("div");
    event.target.appendChild(textX);
    textX.textContent = "X";
    console.log(event.target);
    textX.classList.add("textX");

    objectX.countX = 1;
  }
  //second :XX//
  else if (objectX.countX === 1 && !event.target.hasChildNodes()) {
    const textX1 = document.createElement("div");
    const textX2 = document.createElement("div");
    let indexA = arrayA.indexOf(event.target);
    //right//
    if (arrayRight.includes(indexA) && !arrayA[indexA - 1].hasChildNodes()) {
      arrayA[indexA].appendChild(textX1);
      arrayA[indexA - 1].appendChild(textX2);

      objectX.countX = 2;
    }

    //right//
    else if (
      arrayRight.includes(indexA) &&
      arrayA[indexA - 1].hasChildNodes()
    ) {
    }

    //left//
    else if (
      arrayLeft.includes(indexA) &&
      !arrayA[indexA + 1].hasChildNodes()
    ) {
      arrayA[indexA].appendChild(textX1);
      arrayA[indexA + 1].appendChild(textX2);

      objectX.countX = 2;
    }
    //left//
    else if (arrayLeft.includes(indexA) && arrayA[indexA + 1].hasChildNodes()) {
    }
    //aa//
    else if (
      arrayA[indexA + 1].hasChildNodes() &&
      !arrayLeft.includes(indexA)
    ) {
      arrayA[indexA].appendChild(textX1);
      arrayA[indexA - 1].appendChild(textX2);

      objectX.countX = 2;
    }
    //aa//
    else {
      arrayA[indexA].appendChild(textX1);
      arrayA[indexA + 1].appendChild(textX2);

      objectX.countX = 2;
    }
    if (objectX.countX === 2) {
      textX1.textContent = "X";
      textX2.textContent = "X";

      textX1.classList.add("textX1");
      textX2.classList.add("textX2");
    }
  }
  // third : XXX//
  else if (objectX.countX === 2 && !event.target.hasChildNodes()) {
    const textX3 = document.createElement("div");
    const textX4 = document.createElement("div");
    const textX5 = document.createElement("div");
    let indexA = arrayA.indexOf(event.target);
    //right//
    if (
      arrayRight.includes(indexA) &&
      !arrayA[indexA - 1].hasChildNodes() &&
      !arrayA[indexA - 2].hasChildNodes()
    ) {
      arrayA[indexA].appendChild(textX3);
      arrayA[indexA - 1].appendChild(textX4);
      arrayA[indexA - 2].appendChild(textX5);

      objectX.countX = 3;
    }
    //right//
    else if (
      (arrayRight.includes(indexA) && arrayA[indexA - 1].hasChildNodes()) ||
      (arrayRight.includes(indexA) && !arrayA[indexA - 1].hasChildNodes()) ||
      arrayRight.includes(indexA + 1)
    ) {
    }

    //left//
    else if (
      arrayLeft.includes(indexA) &&
      !arrayA[indexA + 1].hasChildNodes() &&
      !arrayA[indexA + 2].hasChildNodes()
    ) {
      arrayA[indexA].appendChild(textX3);
      arrayA[indexA + 1].appendChild(textX4);
      arrayA[indexA + 2].appendChild(textX5);

      objectX.countX = 3;
    }
    //left//
    else if (
      (arrayLeft.includes(indexA) && arrayA[indexA + 1].hasChildNodes()) ||
      (arrayLeft.includes(indexA) && !arrayA[indexA + 1].hasChildNodes())
    ) {
    }
    //aa//
    else if (
      arrayA[indexA + 1].hasChildNodes() &&
      !arrayLeft.includes(indexA) &&
      !arrayLeft.includes(indexA - 1) &&
      !arrayA[indexA - 1].hasChildNodes() &&
      !arrayA[indexA - 2].hasChildNodes()
    ) {
      arrayA[indexA].appendChild(textX3);
      arrayA[indexA - 1].appendChild(textX4);
      arrayA[indexA - 2].appendChild(textX5);

      objectX.countX = 3;
    }
    //aa//
    else if (
      (arrayA[indexA + 1].hasChildNodes() &&
        !arrayA[indexA + 2].hasChildNodes()) ||
      arrayA[indexA + 2].hasChildNodes()
    ) {
    }

    //aa//
    else {
      arrayA[indexA].appendChild(textX3);
      arrayA[indexA + 1].appendChild(textX4);
      arrayA[indexA + 2].appendChild(textX5);

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
