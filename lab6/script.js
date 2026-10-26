// Dynamic portfolio content configurations
const pageData = {
    home: {
        title: "Welcome to My Portfolio",
        text: "Select an option from the sidebar to view updates on different areas of my life.",
        borderColor: "#FDFFB6" // Yellow
    },
    academics: {
        title: "Academics",
        text: "I am currently a Biology major on the pre med track. I am considering a minor in Forensic Science, Business, or Spanish. I am also in the Honors College.",
        borderColor: "#FFB3D1" // Pink
    },
    involvement: {
        title: "Involvement",
        text: "I am involved in Alpha Epsilon Delta, a pre-health organization, Gamecock Emergency Medical Students, and Chi Omega.",
        borderColor: "#D6B3FF" // Purple
    },
    volunteering: {
        title: "Volunteering",
        text: "I currently volunteer with a student organization on campus called Project Vida, where I teach various health subjects to children K-5 at an afterschool program. I also used to be a volunteer coach for my local Special Olympics Figure Skating program.",
        borderColor: "#B3EFFF" // Blue
    },
    work: {
        title: "Work Experience",
        text: "I used to work at Jellybean Jungle, an indoor children's playground as a party host and customer service representative.",
        borderColor: "#B3FFD9" // Mint Green
    }
};

// DOM Elements
const buttons = document.querySelectorAll('.nav-btn');
const homeButton = document.getElementById('home-btn');
const contentCard = document.getElementById('content-card');
const contentTitle = document.getElementById('content-title');
const contentText = document.getElementById('content-text');

// Function to update the page view smoothly
function updateContent(pageKey) {
    const data = pageData[pageKey];
    
    // Briefly reset animation so it triggers again on update
    contentCard.style.animation = 'none';
    contentCard.offsetHeight; // Trigger reflow
    contentCard.style.animation = 'popIn 0.4s ease-out';

    // Update Text Content
    contentTitle.textContent = data.title;
    contentText.textContent = data.text;
    
    // Dynamically update card border color matching the theme area
    contentCard.style.borderColor = data.borderColor;
}

// Handle Sidebar Button clicks
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Remove active class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        e.target.classList.add('active');
        
        // Get target key and update
        const target = e.target.getAttribute('data-target');
        updateContent(target);
    });
});

// Allow clicking "Rylie's Portfolio" title to return to default home message
homeButton.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    updateContent('home');
});