const board = document.querySelector(".board");

for (let i = 0; i < 9; i++) {
  const cube = document.createElement("div");
  cube.classList.add(`cube${i}`);
  board.appendChild(cube);
}

const cube5 = document.querySelector(".cube5");
const text = document.createElement("div");
text.classList.add("text");
text.textContent = "x";
cube5.appendChild(text);

board.addEventListener("click", (event) => {
  if (event.target.textContent !== "x" && event.target.textContent !== null) {
    event.target.textContent = "O";
  } else if (event.target.textContent === "x") {
    const text = document.querySelector(".text");
    text.style.visibility = "visible";
  }
});
