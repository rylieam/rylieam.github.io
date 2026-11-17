let mealsData = JSON.parse(localStorage.getItem("mealsData")) || [
  { name: "Chicken Salad", ingredients: ["Chicken breast", "Lettuce", "Tomatoes", "Olive oil"] },
  { name: "Oatmeal Bowl", ingredients: ["Oats", "Almond milk", "Berries", "Honey"] }
];

const grid = document.getElementById("meals-grid");

function renderMeals() {
  grid.innerHTML = "";
  mealsData.forEach((meal, index) => {
    const card = document.createElement("div");
    card.className = "meal-card";
    card.innerHTML = `
      <h3>${meal.name}</h3>
      <button onclick="toggleIngredients(${index})">View Ingredients</button>
      <ul id="ingredients-${index}" class="meal-ingredients" style="display:none;">
        ${meal.ingredients.map(ing => `<li>${ing}</li>`).join('')}
      </ul>
    `;
    grid.appendChild(card);
  });
}

window.toggleIngredients = function(index) {
  const list = document.getElementById(`ingredients-${index}`);
  list.style.display = list.style.display === "none" ? "block" : "none";
}

document.getElementById("add-meal-btn").addEventListener("click", () => {
  const name = prompt("Enter meal name:");
  if (!name) return;
  const ingredientsStr = prompt("Enter ingredients separated by commas:");
  if (!ingredientsStr) return;
  
  const ingredients = ingredientsStr.split(",").map(i => i.trim()).filter(i => i);
  mealsData.push({ name, ingredients });
  localStorage.setItem("mealsData", JSON.stringify(mealsData));
  renderMeals();
});

renderMeals();