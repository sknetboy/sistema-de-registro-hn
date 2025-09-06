console.log("Ejecutando el sistema");

(function () {
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('nav a');

    function showSection(id) {
        const targetId = id || 'inicio';
        sections.forEach(s => {
            s.classList.toggle('hidden', s.id !== targetId);
        });
        navLinks.forEach(a => {
            const isCurrent = a.getAttribute('href') === `#${targetId}`;
            a.setAttribute('aria-current', isCurrent ? 'page' : 'false');
        });
    }

    // Handle clicks on nav to update hash (prevents default jumping behavior)
    navLinks.forEach(a => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            const id = a.getAttribute('href').slice(1);
            if (location.hash.slice(1) !== id) {
                location.hash = id;
            } else {
                // already same hash -> still show
                showSection(id);
            }
        });
    });

    // When the hash changes, show the corresponding section
    window.addEventListener('hashchange', () => {
        const id = location.hash.replace('#', '') || 'inicio';
        showSection(id);
    });

    // Initial load
    window.addEventListener('load', () => {
        // Ensure Inicio heading is exactly "Hola mundo mundo"
        const inicioH3 = document.querySelector('#inicio h3');
        if (inicioH3) inicioH3.textContent = 'Hola mundo mundo';

        const id = location.hash.replace('#', '') || 'inicio';
        showSection(id);
    });
})();
