// script.js
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Comprobar el tema actual y establecer el texto del botón
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeToggleButton.textContent = 'Cambiar a Modo Claro';
    } else {
        body.classList.remove('dark-mode');
        themeToggleButton.textContent = 'Cambiar a Modo Oscuro';
    }

    themeToggleButton.addEventListener('click', function() {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            themeToggleButton.textContent = 'Cambiar a Modo Oscuro';
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.add('dark-mode');
            themeToggleButton.textContent = 'Cambiar a Modo Claro';
            localStorage.setItem('theme', 'dark');
        }
    });
});
