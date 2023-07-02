function placeY(
  event,
  objectY,
  hasY,
  arrayB,
  arrayRight,
  arrayLeft,
  player,
  oX,
  oY,
  oB
) {
  if (!hasY && objectY.countY === 0) {
    const textY = document.createElement("div");
    event.target.appendChild(textY);
    textY.textContent = "Y";
    console.log(event.target);
    textY.classList.add("textY");
    hasY = true;

    objectY.countY = 1;
    console.log(objectY.countY);
  } else if (objectY.countY === 1 && !event.target.hasChildNodes()) {
    const textY1 = document.createElement("div");
    const textY2 = document.createElement("div");
    let indexA = arrayB.indexOf(event.target);

    if (arrayRight.includes(indexA) && !arrayB[indexA - 1].hasChildNodes()) {
      arrayB[indexA].appendChild(textY1);
      arrayB[indexA - 1].appendChild(textY2);
      hasY = true;
      objectY.countY = 2;
    } else if (
      arrayB[indexA + 1].hasChildNodes() &&
      !arrayLeft.includes(indexA)
    ) {
      arrayB[indexA].appendChild(textY1);
      arrayB[indexA - 1].appendChild(textY2);
      hasY = true;
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
      hasY = true;
      objectY.countY = 2;
    } else if (
      arrayLeft.includes(indexA) &&
      arrayB[indexA + 1].hasChildNodes()
    ) {
    } else {
      arrayB[indexA].appendChild(textY1);
      arrayB[indexA + 1].appendChild(textY2);
      hasY = true;
      objectY.countY = 2;
    }

    if (objectY.countY === 2) {
      textY1.textContent = "Y";
      textY2.textContent = "Y";
      textY1.classList.add("textY1");
      textY2.classList.add("textY2");

      player.textContent = "begin";
      oX.cX = 0;
      oY.cY = 1;
      oB.cB = 1;
    }
  }
}

export { placeY };
