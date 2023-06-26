function placeX(target, hasX) {
  if (!hasX) {
    const textX = document.createElement("div");
    target.target.appendChild(textX);
    textX.textContent = "X";
    textX.classList.add("textX");
    hasX = true;
    player.textContent = "player2";

    board1.removeEventListener("click", placeX);
    board2.addEventListener("click", placeY);
  }
}
export { placeX };
