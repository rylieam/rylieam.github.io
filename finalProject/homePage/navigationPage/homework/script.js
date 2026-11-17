const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let homeworkData = JSON.parse(localStorage.getItem("homeworkData")) || {};

const container = document.getElementById("days-container");

function renderHomework() {
  container.innerHTML = "";
  days.forEach(day => {
    if (!homeworkData[day]) homeworkData[day] = [];

    const dayDiv = document.createElement("div");
    dayDiv.className = "day-section";
    
    let tasksHtml = `<h3>${day}</h3><div class="task-list">`;
    homeworkData[day].forEach((task, index) => {
      tasksHtml += `
        <div class="task-item">
          <input type="checkbox" data-day="${day}" data-index="${index}" ${task.completed ? "checked" : ""}>
          <span class="${task.completed ? "completed" : ""}">${escapeHtml(task.text)}</span>
        </div>
      `;
    });
    tasksHtml += `</div><button class="add-task-btn" data-day="${day}">+ Add Task</button>`;
    
    dayDiv.innerHTML = tasksHtml;
    container.appendChild(dayDiv);
  });

  attachListeners();
}

function attachListeners() {
  document.querySelectorAll("input[type='checkbox']").forEach(box => {
    box.addEventListener("change", (e) => {
      const day = e.target.dataset.day;
      const index = e.target.dataset.index;
      homeworkData[day][index].completed = e.target.checked;
      saveAndRender();
    });
  });

  document.querySelectorAll(".add-task-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const day = e.target.dataset.day;
      const taskText = prompt(`Enter homework task for ${day}:`);
      if (taskText && taskText.trim() !== "") {
        homeworkData[day].push({ text: taskText.trim(), completed: false });
        saveAndRender();
      }
    });
  });
}

function saveAndRender() {
  localStorage.setItem("homeworkData", JSON.stringify(homeworkData));
  renderHomework();
}

document.getElementById("reset-btn").addEventListener("click", () => {
  if (confirm("Reset all homework tasks?")) {
    homeworkData = {};
    localStorage.removeItem("homeworkData");
    renderHomework();
  }
});

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

renderHomework();