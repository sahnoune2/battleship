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
  //placing ships//

  if (oY.cY === 0) {
    //first :X//
    if (objectY.countY === 0) {
      const randomIndex = Math.floor(Math.random() * arrayB.length);
      const randomElement = arrayB[randomIndex];
      console.log("hey");
      const textY = document.createElement("div");
      randomElement.appendChild(textY);
      randomElement.style.backgroundColor = "yellow";
      textY.style.backgroundColor = "yellow";
      console.log(randomElement);
      textY.classList.add("textY");

      objectY.countY = 1;
    }

    let randomElement1;
    do {
      const randomIndex1 = Math.floor(Math.random() * arrayB.length);
      randomElement1 = arrayB[randomIndex1];
    } while (randomElement1.hasChildNodes());

    //randomElement :XX//
    if (objectY.countY === 1) {
      console.log("fucj");

      console.log(randomElement1);

      const textY1 = document.createElement("div");
      const textY2 = document.createElement("div");
      let indexA = arrayB.indexOf(randomElement1);
      //right//
      if (arrayRight.includes(indexA) && !arrayB[indexA - 1].hasChildNodes()) {
        arrayB[indexA].appendChild(textY1);
        arrayB[indexA - 1].appendChild(textY2);
        arrayB[indexA].style.backgroundColor = "yellow";
        arrayB[indexA - 1].style.backgroundColor = "yellow";
        objectY.countY = 2;
      }

      //right//
      else if (
        arrayRight.includes(indexA) &&
        arrayB[indexA - 1].hasChildNodes()
      ) {
      }

      //left//
      else if (
        arrayLeft.includes(indexA) &&
        !arrayB[indexA + 1].hasChildNodes()
      ) {
        arrayB[indexA].appendChild(textY1);
        arrayB[indexA + 1].appendChild(textY2);
        arrayB[indexA].style.backgroundColor = "yellow";
        arrayB[indexA + 1].style.backgroundColor = "yellow";

        objectY.countY = 2;
      }
      //left//
      else if (
        arrayLeft.includes(indexA) &&
        arrayB[indexA + 1].hasChildNodes()
      ) {
      }
      //aa//
      else if (
        arrayB[indexA + 1].hasChildNodes() &&
        !arrayLeft.includes(indexA)
      ) {
        arrayB[indexA].appendChild(textY1);
        arrayB[indexA - 1].appendChild(textY2);
        arrayB[indexA].style.backgroundColor = "yellow";
        arrayB[indexA - 1].style.backgroundColor = "yellow";

        objectY.countY = 2;
      }
      //aa//
      else {
        arrayB[indexA].appendChild(textY1);
        arrayB[indexA + 1].appendChild(textY2);
        arrayB[indexA].style.backgroundColor = "yellow";
        arrayB[indexA + 1].style.backgroundColor = "yellow";
        objectY.countY = 2;
      }
      if (objectY.countY === 2) {
        textY1.style.backgroundColor = "yellow";
        textY2.style.backgroundColor = "yellow";

        textY1.classList.add("textY1");
        textY2.classList.add("textY2");
      }
    }
    // third : XXX//
    let randomElement2;
    let randomIndex2;
    do {
      randomIndex2 = Math.floor(Math.random() * arrayB.length);
      randomElement2 = arrayB[randomIndex2];
    } while (
      randomElement2.hasChildNodes() ||
      arrayB[randomIndex2 - 2].hasChildNodes() ||
      arrayB[randomIndex2 - 1].hasChildNodes()
    );
    if (objectY.countY === 2) {
      console.log("fuuuuck");

      console.log(randomElement2);

      const textY3 = document.createElement("div");
      const textY4 = document.createElement("div");
      const textY5 = document.createElement("div");
      let indexA = arrayB.indexOf(randomElement2);
      //right//
      if (
        arrayRight.includes(indexA) &&
        !arrayB[indexA - 1].hasChildNodes() &&
        !arrayB[indexA - 2].hasChildNodes()
      ) {
        arrayB[indexA].appendChild(textY3);
        arrayB[indexA - 1].appendChild(textY4);
        arrayB[indexA - 2].appendChild(textY5);
        arrayB[indexA].style.backgroundColor = "yellow";
        arrayB[indexA - 1].style.backgroundColor = "yellow";
        arrayB[indexA - 2].style.backgroundColor = "yellow";

        objectY.countY = 3;
      }
      //right//
      else if (
        (arrayRight.includes(indexA) && arrayB[indexA - 1].hasChildNodes()) ||
        (arrayRight.includes(indexA) && !arrayB[indexA - 1].hasChildNodes())
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
        arrayB[indexA].style.backgroundColor = "yellow";
        arrayB[indexA + 1].style.backgroundColor = "yellow";
        arrayB[indexA + 2].style.backgroundColor = "yellow";

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
        arrayB[indexA].style.backgroundColor = "yellow";
        arrayB[indexA - 1].style.backgroundColor = "yellow";
        arrayB[indexA - 2].style.backgroundColor = "yellow";

        objectY.countY = 3;
      }

      //////////////try////////
      else if (
        !arrayB[indexA + 1].hasChildNodes() &&
        !arrayB[indexA - 1].hasChildNodes()
      ) {
        arrayB[indexA + 1].appendChild(textY3);
        arrayB[indexA].appendChild(textY4);
        arrayB[indexA - 1].appendChild(textY5);
        arrayB[indexA].style.backgroundColor = "yellow";
        arrayB[indexA - 1].style.backgroundColor = "yellow";
        arrayB[indexA + 1].style.backgroundColor = "yellow";

        objectY.countY = 3;
      }
      //aa/////////////////
      else if (
        (arrayB[indexA + 1].hasChildNodes() &&
          !arrayB[indexA + 2].hasChildNodes()) ||
        arrayB[indexA + 2].hasChildNodes() ||
        arrayLeft.includes(indexA + 2)
      ) {
      }

      //aa//
      else {
        arrayB[indexA].appendChild(textY3);
        arrayB[indexA + 1].appendChild(textY4);
        arrayB[indexA + 2].appendChild(textY5);
        arrayB[indexA].style.backgroundColor = "yellow";
        arrayB[indexA + 1].style.backgroundColor = "yellow";
        arrayB[indexA + 2].style.backgroundColor = "yellow";

        objectY.countY = 3;
      }

      if (objectY.countY === 3) {
        textY3.style.backgroundColor = "yellow";
        textY4.style.backgroundColor = "yellow";
        textY5.style.backgroundColor = "yellow";

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
}

export { placeY };
