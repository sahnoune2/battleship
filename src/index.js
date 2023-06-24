const board = document.querySelector(".board");
const button = document.createElement("button");
button.classList.add("button");
button.textContent = "button";
document.body.appendChild(button);
for (let i = 0; i < 9; i++) {
  const cube = document.createElement("div");
  cube.classList.add(`cube${i}`);
  board.appendChild(cube);
}

// const cube5 = document.querySelector(".cube5");
// const text = document.createElement("div");
// text.classList.add("text");
// // text.textContent = "x";
// cube5.appendChild(text);
let maybe = false;
board.addEventListener("click", (event) => {
  if (maybe === false) {
    const text = document.createElement("div");
    event.target.appendChild(text);
    text.textContent = "x";
    text.classList.add("text");
    maybe = true;
    button.addEventListener("click", () => {
      text.style.visibility = "hidden";
      board.addEventListener("click", (event) => {
        if (
          event.target.textContent !== "x" &&
          event.target.textContent !== null
        ) {
          event.target.textContent = "O";
        } else if (event.target.textContent === "x") {
          const text = document.querySelector(".text");
          text.style.visibility = "visible";
        }
      });
    });
  }
});
