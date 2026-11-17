const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let choreData = JSON.parse(localStorage.getItem("choreData")) || {
  Sunday: ["Vacuum"],
  Monday: [], Tuesday: [], Wednesday: [], Thursday: [], Friday: [], Saturday: []
};

const tbody = document.getElementById("chore-tbody");

function renderChores() {
  tbody.innerHTML = "";
  // Find max length among days to build rows
  const maxLength = Math.max(...daysOfWeek.map(d => choreData[d].length), 1);

  for (let i = 0; i < maxLength; i++) {
    const tr = document.createElement("tr");
    daysOfWeek.forEach(day => {
      const td = document.createElement("td");
      const chore = choreData[day][i];
      if (chore) {
        td.innerHTML = `
          <div class="chore-item">
            <span>${chore}</span>
            <button onclick="removeChore('${day}', ${i})">&times;</button>
          </div>
        `;
      }
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  }
}

document.getElementById("add-chore-btn").addEventListener("click", () => {
  const choreName = prompt("Enter chore name:");
  if (!choreName) return;
  const day = prompt(`Enter day of the week (${daysOfWeek.join(', ')}):`, "Monday");
  if (daysOfWeek.includes(day)) {
    choreData[day].push(choreName.trim());
    saveAndRender();
  } else {
    alert("Invalid day entered.");
  }
});

window.removeChore = function(day, index) {
  choreData[day].splice(index, 1);
  saveAndRender();
}

document.getElementById("reset-btn").addEventListener("click", () => {
  if (confirm("Reset all chores?")) {
    choreData = { Sunday: [], Monday: [], Tuesday: [], Wednesday: [], Thursday: [], Friday: [], Saturday: [] };
    localStorage.removeItem("choreData");
    renderChores();
  }
});

function saveAndRender() {
  localStorage.setItem("choreData", JSON.stringify(choreData));
  renderChores();
}

renderChores();