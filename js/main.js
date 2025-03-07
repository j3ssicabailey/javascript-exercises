document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const cards = document.querySelectorAll('.card');
    const sections = document.querySelectorAll('section');

    // Check local storage for preference
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        header.classList.add('dark-mode');
        footer.classList.add('dark-mode');
        cards.forEach(card => card.classList.add('dark-mode'));
        sections.forEach(section => section.classList.add('dark-mode'));
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        header.classList.toggle('dark-mode');
        footer.classList.toggle('dark-mode');
        cards.forEach(card => card.classList.toggle('dark-mode'));
        sections.forEach(section => section.classList.toggle('dark-mode'));

        // Save preference to local storage
        const mode = body.classList.contains('dark-mode') ? 'enabled' : 'disabled';
        localStorage.setItem('dark-mode', mode);
    });
});
