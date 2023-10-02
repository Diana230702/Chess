const cells = document.querySelectorAll(".cell");
const trashBin = document.querySelector(".trash-bin");
let selectedPiece = null;

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (selectedPiece) {
      cell.appendChild(selectedPiece);
      selectedPiece = null;
    } else if (cell.children.length > 0) {
      selectedPiece = cell.firstElementChild;
    }
  });
});

trashBin.addEventListener("click", () => {
  if (selectedPiece) {
    trashBin.appendChild(selectedPiece);
    selectedPiece = null;
  }
});
