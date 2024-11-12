// Script to show a welcome message
window.addEventListener("load", () => {
    alert("Welcome to Shaye Acevedo's Resume!");
});
// Example: Hover effect if additional interactivity is desired (not required).
const skillsListItems = document.querySelectorAll('.skills-list li');
skillsListItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = '#0056b3';
    });
    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = '#007bff';
    });
});