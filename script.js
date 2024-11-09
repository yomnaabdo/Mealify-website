/* <!--------------------------------navbar section-----------------------------------> */
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const content = document.querySelector('.content');
const modeIcon = document.querySelector('.mode-icon');
const closeMenu = document.querySelector('.close-menu'); // The X button
const logo = document.querySelector('.logo'); // The logo

// Open the menu when the menu button is clicked
menuButton.addEventListener('click', () => {
    menu.style.display = 'flex';  // Show the menu
    content.classList.add('blur-content');  // Blur the content
    menuButton.classList.add('hide-nav');   // Hide the menu button
    modeIcon.classList.add('hide-nav');     // Hide the mode icon
    logo.classList.add('fixed-logo');       // Fix the logo
});

// Close the menu when the X button is clicked
closeMenu.addEventListener('click', () => {
    menu.style.display = 'none';  // Hide the menu
    content.classList.remove('blur-content');  // Remove blur effect
    menuButton.classList.remove('hide-nav');   // Show the menu button
    modeIcon.classList.remove('hide-nav');     // Show the mode icon
    logo.classList.remove('fixed-logo');       // Unfix the logo
});

// Select mode icon elements
const body = document.body;

// Check if the user has a saved preference
const savedMode = localStorage.getItem('theme');

// Apply the saved mode if it exists
if (savedMode === 'dark') {
    body.classList.add('dark-mode');
}

// Event listener for the mode icon click
modeIcon.addEventListener('click', () => {
    // Toggle dark mode class on the body
    body.classList.toggle('dark-mode');
    
    // Save the user preference to localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});