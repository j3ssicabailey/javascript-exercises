
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const cards = document.querySelectorAll('.card');
    const sections = document.querySelectorAll('section');

    // Function to apply dark mode
    function applyDarkMode(enabled) {
        if (enabled) {
            body.classList.add('dark-mode');
            if (header) header.classList.add('dark-mode');
            if (footer) footer.classList.add('dark-mode');
            cards.forEach(card => card.classList.add('dark-mode'));
            sections.forEach(section => section.classList.add('dark-mode'));
        } else {
            body.classList.remove('dark-mode');
            if (header) header.classList.remove('dark-mode');
            if (footer) footer.classList.remove('dark-mode');
            cards.forEach(card => card.classList.remove('dark-mode'));
            sections.forEach(section => section.classList.remove('dark-mode'));
        }
    }

    // Check localStorage for dark mode preference on page load
    const darkModeEnabled = localStorage.getItem('dark-mode') === 'enabled';
    applyDarkMode(darkModeEnabled);

    // Ensure the toggle button exists before adding event listener
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            const isEnabled = body.classList.toggle('dark-mode');
            applyDarkMode(isEnabled);
            localStorage.setItem('dark-mode', isEnabled ? 'enabled' : 'disabled');
        });
    }
});
