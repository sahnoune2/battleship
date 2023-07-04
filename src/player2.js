function placeY(
  event,
  objectY,
  arrayB,
  arrayRight,
  arrayLeft,
  player,
  oX,
  oY,
  oB
) {
  if (objectY.countY === 0) {
    const textY = document.createElement("div");
    event.target.appendChild(textY);
    textY.textContent = "Y";
    console.log(event.target);
    textY.classList.add("textY");

    objectY.countY = 1;
    console.log(objectY.countY);
  } else if (objectY.countY === 1 && !event.target.hasChildNodes()) {
    const textY1 = document.createElement("div");
    const textY2 = document.createElement("div");
    let indexA = arrayB.indexOf(event.target);

    if (arrayRight.includes(indexA) && !arrayB[indexA - 1].hasChildNodes()) {
      arrayB[indexA].appendChild(textY1);
      arrayB[indexA - 1].appendChild(textY2);

      objectY.countY = 2;
    } else if (
      arrayB[indexA + 1].hasChildNodes() &&
      !arrayLeft.includes(indexA)
    ) {
      arrayB[indexA].appendChild(textY1);
      arrayB[indexA - 1].appendChild(textY2);

      objectY.countY = 2;
    } else if (
      arrayRight.includes(indexA) &&
      arrayB[indexA - 1].hasChildNodes()
    ) {
    } else if (
      arrayLeft.includes(indexA) &&
      !arrayB[indexA + 1].hasChildNodes()
    ) {
      arrayB[indexA].appendChild(textY1);
      arrayB[indexA + 1].appendChild(textY2);

      objectY.countY = 2;
    } else if (
      arrayLeft.includes(indexA) &&
      arrayB[indexA + 1].hasChildNodes()
    ) {
    } else {
      arrayB[indexA].appendChild(textY1);
      arrayB[indexA + 1].appendChild(textY2);

      objectY.countY = 2;
    }

    if (objectY.countY === 2) {
      textY1.textContent = "Y";
      textY2.textContent = "Y";
      textY1.classList.add("textY1");
      textY2.classList.add("textY2");
    }
  }
  //third:YYY//
  else if (objectY.countY === 2 && !event.target.hasChildNodes()) {
    const textY3 = document.createElement("div");
    const textY4 = document.createElement("div");
    const textY5 = document.createElement("div");
    let indexA = arrayB.indexOf(event.target);
    //right//
    if (
      arrayRight.includes(indexA) &&
      !arrayB[indexA - 1].hasChildNodes() &&
      !arrayB[indexA - 2].hasChildNodes()
    ) {
      arrayB[indexA].appendChild(textY3);
      arrayB[indexA - 1].appendChild(textY4);
      arrayB[indexA - 2].appendChild(textY5);

      objectY.countY = 3;
    }
    //right//
    else if (
      (arrayRight.includes(indexA) && arrayB[indexA - 1].hasChildNodes()) ||
      (arrayRight.includes(indexA) && !arrayB[indexA - 1].hasChildNodes()) ||
      arrayRight.includes(indexA + 1)
    ) {
    }

    //left//
    else if (
      arrayLeft.includes(indexA) &&
      !arrayB[indexA + 1].hasChildNodes() &&
      !arrayB[indexA + 2].hasChildNodes()
    ) {
      arrayB[indexA].appendChild(textY3);
      arrayB[indexA + 1].appendChild(textY4);
      arrayB[indexA + 2].appendChild(textY5);

      objectY.countY = 3;
    }
    //left//
    else if (
      (arrayLeft.includes(indexA) && arrayB[indexA + 1].hasChildNodes()) ||
      (arrayLeft.includes(indexA) && !arrayB[indexA + 1].hasChildNodes())
    ) {
    }
    //aa//
    else if (
      arrayB[indexA + 1].hasChildNodes() &&
      !arrayLeft.includes(indexA) &&
      !arrayLeft.includes(indexA - 1) &&
      !arrayB[indexA - 1].hasChildNodes() &&
      !arrayB[indexA - 2].hasChildNodes()
    ) {
      arrayB[indexA].appendChild(textY3);
      arrayB[indexA - 1].appendChild(textY4);
      arrayB[indexA - 2].appendChild(textY5);

      objectY.countY = 3;
    }
    //aa//
    else if (
      (arrayB[indexA + 1].hasChildNodes() &&
        !arrayB[indexA + 2].hasChildNodes()) ||
      arrayB[indexA + 2].hasChildNodes()
    ) {
    }

    //aa//
    else {
      arrayB[indexA].appendChild(textY3);
      arrayB[indexA + 1].appendChild(textY4);
      arrayB[indexA + 2].appendChild(textY5);

      objectY.countY = 3;
    }

    if (objectY.countY === 3) {
      textY3.textContent = "Y";
      textY4.textContent = "Y";
      textY5.textContent = "Y";
      textY3.classList.add("textY3");
      textY4.classList.add("textY4");
      textY5.classList.add("textY5");

      player.textContent = "begin";
      oX.cX = 0;
      oY.cY = 1;
      oB.cB = 1;
    }
  }
}

export { placeY };
