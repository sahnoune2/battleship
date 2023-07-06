function placeX(
  event,
  objectX,
  arrayA,
  arrayRight,
  arrayLeft,
  player,
  oX,
  oY,
  first
) {
  first.addEventListener("mouseover", function () {
    if (oX.cX === 0) {
      //first :X//
      if (objectX.countX === 0) {
        first.style.backgroundColor = "yellow";
      }
      //second :XX//
      else if (objectX.countX === 1 && !first.hasChildNodes()) {
        let indexA = arrayA.indexOf(first);
        //right//
        if (
          arrayRight.includes(indexA) &&
          !arrayA[indexA - 1].hasChildNodes()
        ) {
          arrayA[indexA].style.backgroundColor = "yellow";
          arrayA[indexA - 1].style.backgroundColor = "yellow";
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
          arrayA[indexA].style.backgroundColor = "yellow";
          arrayA[indexA + 1].style.backgroundColor = "yellow";
        }
        //left//
        else if (
          arrayLeft.includes(indexA) &&
          arrayA[indexA + 1].hasChildNodes()
        ) {
        }
        //aa//
        else if (
          arrayA[indexA + 1].hasChildNodes() &&
          !arrayLeft.includes(indexA)
        ) {
          arrayA[indexA].style.backgroundColor = "yellow";
          arrayA[indexA - 1].style.backgroundColor = "yellow";
        }
        //aa//
        else {
          arrayA[indexA].style.backgroundColor = "yellow";
          arrayA[indexA + 1].style.backgroundColor = "yellow";
        }
      }
      // third : XXX//
      else if (objectX.countX === 2 && !first.hasChildNodes()) {
        let indexA = arrayA.indexOf(first);
        //right//
        if (
          arrayRight.includes(indexA) &&
          !arrayA[indexA - 1].hasChildNodes() &&
          !arrayA[indexA - 2].hasChildNodes()
        ) {
          arrayA[indexA].style.backgroundColor = "yellow";
          arrayA[indexA - 1].style.backgroundColor = "yellow";
          arrayA[indexA - 2].style.backgroundColor = "yellow";
        }
        //right//
        else if (
          (arrayRight.includes(indexA) && arrayA[indexA - 1].hasChildNodes()) ||
          (arrayRight.includes(indexA) &&
            !arrayA[indexA - 1].hasChildNodes()) ||
          arrayRight.includes(indexA + 1)
        ) {
        }

        //left//
        else if (
          arrayLeft.includes(indexA) &&
          !arrayA[indexA + 1].hasChildNodes() &&
          !arrayA[indexA + 2].hasChildNodes()
        ) {
          arrayA[indexA].style.backgroundColor = "yellow";
          arrayA[indexA + 1].style.backgroundColor = "yellow";
          arrayA[indexA + 2].style.backgroundColor = "yellow";
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
          arrayA[indexA].style.backgroundColor = "yellow";
          arrayA[indexA - 1].style.backgroundColor = "yellow";
          arrayA[indexA - 2].style.backgroundColor = "yellow";
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
          arrayA[indexA].style.backgroundColor = "yellow";
          arrayA[indexA + 1].style.backgroundColor = "yellow";
          arrayA[indexA + 2].style.backgroundColor = "yellow";
        }
      }
    }
  });
  first.addEventListener("mouseout", function () {
    if (oX.cX === 0) {
      //first :X//
      if (objectX.countX === 0) {
        first.style.backgroundColor = "";
      }
      //second :XX//
      else if (objectX.countX === 1 && !first.hasChildNodes()) {
        let indexA = arrayA.indexOf(first);
        //right//
        if (
          arrayRight.includes(indexA) &&
          !arrayA[indexA - 1].hasChildNodes()
        ) {
          arrayA[indexA].style.backgroundColor = "";
          arrayA[indexA - 1].style.backgroundColor = "";
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
          arrayA[indexA].style.backgroundColor = "";
          arrayA[indexA + 1].style.backgroundColor = "";
        }
        //left//
        else if (
          arrayLeft.includes(indexA) &&
          arrayA[indexA + 1].hasChildNodes()
        ) {
        }
        //aa//
        else if (
          arrayA[indexA + 1].hasChildNodes() &&
          !arrayLeft.includes(indexA)
        ) {
          arrayA[indexA].style.backgroundColor = "";
          arrayA[indexA - 1].style.backgroundColor = "";
        }
        //aa//
        else {
          arrayA[indexA].style.backgroundColor = "";
          arrayA[indexA + 1].style.backgroundColor = "";
        }
      }
      // third : XXX//
      else if (objectX.countX === 2 && !first.hasChildNodes()) {
        let indexA = arrayA.indexOf(first);
        //right//
        if (
          arrayRight.includes(indexA) &&
          !arrayA[indexA - 1].hasChildNodes() &&
          !arrayA[indexA - 2].hasChildNodes()
        ) {
          arrayA[indexA].style.backgroundColor = "";
          arrayA[indexA - 1].style.backgroundColor = "";
          arrayA[indexA - 2].style.backgroundColor = "";
        }
        //right//
        else if (
          (arrayRight.includes(indexA) && arrayA[indexA - 1].hasChildNodes()) ||
          (arrayRight.includes(indexA) &&
            !arrayA[indexA - 1].hasChildNodes()) ||
          arrayRight.includes(indexA + 1)
        ) {
        }

        //left//
        else if (
          arrayLeft.includes(indexA) &&
          !arrayA[indexA + 1].hasChildNodes() &&
          !arrayA[indexA + 2].hasChildNodes()
        ) {
          arrayA[indexA].style.backgroundColor = "";
          arrayA[indexA + 1].style.backgroundColor = "";
          arrayA[indexA + 2].style.backgroundColor = "";
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
          arrayA[indexA].style.backgroundColor = "";
          arrayA[indexA - 1].style.backgroundColor = "";
          arrayA[indexA - 2].style.backgroundColor = "";
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
          arrayA[indexA].style.backgroundColor = "";
          arrayA[indexA + 1].style.backgroundColor = "";
          arrayA[indexA + 2].style.backgroundColor = "";
        }
      }
    }
  });

  first.addEventListener("click", function () {
    if (oX.cX === 0) {
      //first :X//
      if (objectX.countX === 0) {
        const textX = document.createElement("div");
        first.appendChild(textX);

        textX.style.backgroundColor = "red";

        textX.classList.add("textX");

        objectX.countX = 1;
      }
      //second :XX//
      else if (objectX.countX === 1 && !first.hasChildNodes()) {
        const textX1 = document.createElement("div");
        const textX2 = document.createElement("div");
        let indexA = arrayA.indexOf(first);
        //right//
        if (
          arrayRight.includes(indexA) &&
          !arrayA[indexA - 1].hasChildNodes()
        ) {
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
        else if (
          arrayLeft.includes(indexA) &&
          arrayA[indexA + 1].hasChildNodes()
        ) {
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
          textX1.style.backgroundColor = "red";
          textX2.style.backgroundColor = "red";

          textX1.classList.add("textX1");
          textX2.classList.add("textX2");
        }
      }
      // third : XXX//
      else if (objectX.countX === 2 && !first.hasChildNodes()) {
        const textX3 = document.createElement("div");
        const textX4 = document.createElement("div");
        const textX5 = document.createElement("div");
        let indexA = arrayA.indexOf(first);
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
          (arrayRight.includes(indexA) &&
            !arrayA[indexA - 1].hasChildNodes()) ||
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
          textX3.style.backgroundColor = "red";
          textX4.style.backgroundColor = "red";
          textX5.style.backgroundColor = "red";

          textX3.classList.add("textX3");
          textX4.classList.add("textX4");
          textX5.classList.add("textX5");

          player.textContent = "player2's turn";
          oX.cX = 1;
          oY.cY = 0;
        }
      }
    }
  });
}

export { placeX };
