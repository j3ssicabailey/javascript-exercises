document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Ensure elements exist before trying to manipulate them
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const cards = document.querySelectorAll('.card');
    const sections = document.querySelectorAll('section');

    // Check if the toggleButton exists
    if (toggleButton) {
        // Check local storage for preference
        if (localStorage.getItem('dark-mode') === 'enabled') {
            body.classList.add('dark-mode');
            if (header) header.classList.add('dark-mode');
            if (footer) footer.classList.add('dark-mode');
            cards.forEach(card => card.classList.add('dark-mode'));
            sections.forEach(section => section.classList.add('dark-mode'));
        }

        toggleButton.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            if (header) header.classList.toggle('dark-mode');
            if (footer) footer.classList.toggle('dark-mode');
            cards.forEach(card => card.classList.toggle('dark-mode'));
            sections.forEach(section => section.classList.toggle('dark-mode'));

            // Save preference to local storage
            const mode = body.classList.contains('dark-mode') ? 'enabled' : 'disabled';
            localStorage.setItem('dark-mode', mode);
        });
    };
    
});
