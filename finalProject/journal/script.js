let journalData = JSON.parse(localStorage.getItem("journalData")) || [
  { date: "12/11/2026", text: "Journaling was a good day, keeping yourself!" }
];

const listContainer = document.getElementById("entries-list");

function renderJournal() {
  listContainer.innerHTML = "";
  journalData.forEach(entry => {
    const card = document.createElement("div");
    card.className = "entry-card";
    card.innerHTML = `
      <div class="entry-date">${entry.date}</div>
      <div class="entry-text">${escapeHtml(entry.text)}</div>
    `;
    listContainer.appendChild(card);
  });
}

document.getElementById("add-entry-btn").addEventListener("click", () => {
  const text = prompt("Write your nightly journal entry:");
  if (text && text.trim() !== "") {
    const today = new Date().toLocaleDateString();
    journalData.unshift({ date: today, text: text.trim() });
    localStorage.setItem("journalData", JSON.stringify(journalData));
    renderJournal();
  }
});

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

renderJournal();