function placeO1(event, textX, clicked1) {
  if (clicked1 === false) {
    if (event.target.textContent !== "X" && event.target.textContent !== null) {
      event.target.textContent = "O";
    } else if (event.target.textContent === "X") {
      textX.style.visibility = "visible";
      alert("player1 wins");
      location.reload();
    }
  }
}
export { placeO1 };
