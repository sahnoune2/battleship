function placeY(
  event,
  objectY,
  arrayB,
  arrayRight,
  arrayLeft,
  player,
  oX,
  oY,
  oB,
  second
) {
  second.addEventListener("mouseover", function () {
    if (oY.cY === 0) {
      //first :X//
      if (objectY.countY === 0) {
        second.style.backgroundColor = "yellow";
      }
      //second :XX//
      else if (objectY.countY === 1 && !second.hasChildNodes()) {
        let indexA = arrayB.indexOf(second);
        //right//
        if (
          arrayRight.includes(indexA) &&
          !arrayB[indexA - 1].hasChildNodes()
        ) {
          arrayB[indexA].style.backgroundColor = "yellow";
          arrayB[indexA - 1].style.backgroundColor = "yellow";
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
          arrayB[indexA].style.backgroundColor = "yellow";
          arrayB[indexA + 1].style.backgroundColor = "yellow";
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
          arrayB[indexA].style.backgroundColor = "yellow";
          arrayB[indexA - 1].style.backgroundColor = "yellow";
        }
        //aa//
        else {
          arrayB[indexA].style.backgroundColor = "yellow";
          arrayB[indexA + 1].style.backgroundColor = "yellow";
        }
      }
      // third : XXX//
      else if (objectY.countY === 2 && !second.hasChildNodes()) {
        let indexA = arrayB.indexOf(second);
        //right//
        if (
          arrayRight.includes(indexA) &&
          !arrayB[indexA - 1].hasChildNodes() &&
          !arrayB[indexA - 2].hasChildNodes()
        ) {
          arrayB[indexA].style.backgroundColor = "yellow";
          arrayB[indexA - 1].style.backgroundColor = "yellow";
          arrayB[indexA - 2].style.backgroundColor = "yellow";
        }
        //right//
        else if (
          (arrayRight.includes(indexA) && arrayB[indexA - 1].hasChildNodes()) ||
          (arrayRight.includes(indexA) &&
            !arrayB[indexA - 1].hasChildNodes()) ||
          arrayRight.includes(indexA + 1)
        ) {
        }

        //left//
        else if (
          arrayLeft.includes(indexA) &&
          !arrayB[indexA + 1].hasChildNodes() &&
          !arrayB[indexA + 2].hasChildNodes()
        ) {
          arrayB[indexA].style.backgroundColor = "yellow";
          arrayB[indexA + 1].style.backgroundColor = "yellow";
          arrayB[indexA + 2].style.backgroundColor = "yellow";
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
          arrayB[indexA].style.backgroundColor = "yellow";
          arrayB[indexA - 1].style.backgroundColor = "yellow";
          arrayB[indexA - 2].style.backgroundColor = "yellow";
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
          arrayB[indexA].style.backgroundColor = "yellow";
          arrayB[indexA + 1].style.backgroundColor = "yellow";
          arrayB[indexA + 2].style.backgroundColor = "yellow";
        }
      }
    }
  });
  second.addEventListener("mouseout", function () {
    if (oY.cY === 0) {
      //first :X//
      if (objectY.countY === 0) {
        second.style.backgroundColor = "";
      }
      //second :XX//
      else if (objectY.countY === 1 && !second.hasChildNodes()) {
        let indexA = arrayB.indexOf(second);
        //right//
        if (
          arrayRight.includes(indexA) &&
          !arrayB[indexA - 1].hasChildNodes()
        ) {
          arrayB[indexA].style.backgroundColor = "";
          arrayB[indexA - 1].style.backgroundColor = "";
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
          arrayB[indexA].style.backgroundColor = "";
          arrayB[indexA + 1].style.backgroundColor = "";
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
          arrayB[indexA].style.backgroundColor = "";
          arrayB[indexA - 1].style.backgroundColor = "";
        }
        //aa//
        else {
          arrayB[indexA].style.backgroundColor = "";
          arrayB[indexA + 1].style.backgroundColor = "";
        }
      }
      // third : XXX//
      else if (objectY.countY === 2 && !second.hasChildNodes()) {
        let indexA = arrayB.indexOf(second);
        //right//
        if (
          arrayRight.includes(indexA) &&
          !arrayB[indexA - 1].hasChildNodes() &&
          !arrayB[indexA - 2].hasChildNodes()
        ) {
          arrayB[indexA].style.backgroundColor = "";
          arrayB[indexA - 1].style.backgroundColor = "";
          arrayB[indexA - 2].style.backgroundColor = "";
        }
        //right//
        else if (
          (arrayRight.includes(indexA) && arrayB[indexA - 1].hasChildNodes()) ||
          (arrayRight.includes(indexA) &&
            !arrayB[indexA - 1].hasChildNodes()) ||
          arrayRight.includes(indexA + 1)
        ) {
        }

        //left//
        else if (
          arrayLeft.includes(indexA) &&
          !arrayB[indexA + 1].hasChildNodes() &&
          !arrayB[indexA + 2].hasChildNodes()
        ) {
          arrayB[indexA].style.backgroundColor = "";
          arrayB[indexA + 1].style.backgroundColor = "";
          arrayB[indexA + 2].style.backgroundColor = "";
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
          arrayB[indexA].style.backgroundColor = "";
          arrayB[indexA - 1].style.backgroundColor = "";
          arrayB[indexA - 2].style.backgroundColor = "";
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
          arrayB[indexA].style.backgroundColor = "";
          arrayB[indexA + 1].style.backgroundColor = "";
          arrayB[indexA + 2].style.backgroundColor = "";
        }
      }
    }
  });
  second.addEventListener("click", function () {
    if (oY.cY === 0) {
      //first :X//
      if (objectY.countY === 0) {
        const textY = document.createElement("div");
        second.appendChild(textY);

        textY.style.backgroundColor = "red";
        console.log(second);
        textY.classList.add("textY");

        objectY.countY = 1;
      }
      //second :XX//
      else if (objectY.countY === 1 && !second.hasChildNodes()) {
        const textY1 = document.createElement("div");
        const textY2 = document.createElement("div");
        let indexA = arrayB.indexOf(second);
        //right//
        if (
          arrayRight.includes(indexA) &&
          !arrayB[indexA - 1].hasChildNodes()
        ) {
          arrayB[indexA].appendChild(textX1);
          arrayB[indexA - 1].appendChild(textY2);

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

          objectY.countY = 2;
        }
        //aa//
        else {
          arrayB[indexA].appendChild(textY1);
          arrayB[indexA + 1].appendChild(textY2);

          objectY.countY = 2;
        }
        if (objectY.countY === 2) {
          textY1.style.backgroundColor = "red";
          textY2.style.backgroundColor = "red";

          textY1.classList.add("textY1");
          textY2.classList.add("textY2");
        }
      }
      // third : XXX//
      else if (objectY.countY === 2 && !second.hasChildNodes()) {
        const textY3 = document.createElement("div");
        const textY4 = document.createElement("div");
        const textY5 = document.createElement("div");
        let indexA = arrayB.indexOf(second);
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
          (arrayRight.includes(indexA) &&
            !arrayB[indexA - 1].hasChildNodes()) ||
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
          textY3.style.backgroundColor = "red";
          textY4.style.backgroundColor = "red";
          textY5.style.backgroundColor = "red";

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
  });
}

export { placeY };
