const moods = {
  "Happy": "happy",
  "Sad": "sad",
  "Mad": "mad",
  "Anxious": "anxious",
  "Stressed": "stressed",
  "Sick": "sick"
};

let moodData = JSON.parse(localStorage.getItem("moodData")) || {};
const grid = document.getElementById("calendar-grid");

function renderCalendar() {
  grid.innerHTML = "";
  // Assuming 31 days in December
  for (let day = 1; day <= 31; day++) {
    const dayDiv = document.createElement("div");
    dayDiv.className = "cal-day";
    
    const moodClass = moodData[day] ? moods[moodData[day]] : "";
    if (moodClass) {
      dayDiv.classList.add(moodClass);
    }

    dayDiv.innerHTML = `<div class="day-num">${day}</div>`;
    grid.appendChild(dayDiv);
  }
}

document.getElementById("log-mood-btn").addEventListener("click", () => {
  const day = prompt("Enter day of December (1-31):");
  if (!day || isNaN(day) || day < 1 || day > 31) return;
  
  const moodPrompt = prompt("Enter mood (Happy, Sad, Mad, Anxious, Stressed, Sick):");
  if (moods[moodPrompt]) {
    moodData[day] = moodPrompt;
    localStorage.setItem("moodData", JSON.stringify(moodData));
    renderCalendar();
  } else {
    alert("Invalid mood entered.");
  }
});

renderCalendar();