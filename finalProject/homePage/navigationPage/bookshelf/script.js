let booksData = JSON.parse(localStorage.getItem("booksData")) || [
  "Golden Child", "The Hunger Games", "Earthlings", "East of Eden", "Harry Potter"
];

const grid = document.getElementById("shelf-grid");

function renderBooks() {
  grid.innerHTML = "";
  booksData.forEach(book => {
    const card = document.createElement("div");
    card.className = "book-card";
    card.innerText = book;
    grid.appendChild(card);
  });
}

document.getElementById("add-book-btn").addEventListener("click", () => {
  const title = prompt("Enter book title:");
  if (title && title.trim() !== "") {
    booksData.push(title.trim());
    localStorage.setItem("booksData", JSON.stringify(booksData));
    renderBooks();
  }
});

renderBooks();