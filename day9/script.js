// 1. Establish the starting array of default items
const checklist = [
    "Wear Garnet and Black",
    "Bring Carolina Card",
    "Hydrate!"
];

// Grab the HTML list element once so we can use it later
const displayList = document.getElementById("checklist-display");

// 2. The function that loops through the array and draws it on the screen
function renderList() {
    
    // THE AI AUDIT FIX: We must clear the HTML list first! 
    // If we don't do this, every time we add a new item, it will print out all the old items again too.
    displayList.innerHTML = "";

    // Loop through the current state of the array
    for (let i = 0; i < checklist.length; i++) {
        // Inject each item as a list item
        displayList.innerHTML += "<li>" + checklist[i] + "</li>";
    }
}

// 3. The function triggered when the user clicks the "Add" button
function addItem() {
    
    // Grab the text the user typed into the input box
    const inputBox = document.getElementById("newItem");
    const newItemText = inputBox.value;

    // Only run this if the user actually typed something (prevents adding empty boxes)
    if (newItemText !== "") {
        
        // Push the new item to our JavaScript array
        checklist.push(newItemText);
        
        // Tell the screen to redraw the list now that the array has changed
        renderList();
        
        // Clear out the input box so it is ready for the next item
        inputBox.value = "";
    }
}

// 4. Run the render function immediately when the page loads so the default items appear
renderList();