const dashboardData = {
    dining: {
        title: "Campus Dining",
        text: "Russell House is currently serving lunch. Food trucks will be parked outside the Thomas Cooper Library starting at 5:00 PM."
    },
    athletics: {
        title: "Gamecock Athletics",
        text: "The upcoming football game is sold out. Remember to wear Garnet! The stadium clear bag policy is in strict effect."
    },
    academics: {
        title: "Academic Deadlines",
        text: "Midterms are approaching. The drop/add date without a penalty of 'WF' is this Friday at 5:00 PM. Check Blackboard for course schedules."
    }
};

function changeContent(category) {
    
    const contentBox = document.getElementById("dynamic-content");
    
    const selectedData = dashboardData[category];
    
    contentBox.innerHTML = `
        <h2>${selectedData.title}</h2>
        <p>${selectedData.text}</p>
    `;
}