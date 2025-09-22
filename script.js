// Este código JavaScript não é estritamente necessário para este caso,
// mas é uma boa prática para separar a lógica de interação.

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.querySelector('.primary-button');
    const loginButton = document.querySelector('.secondary-button');

    startButton.addEventListener('click', () => {
        window.location.href = 'comecar.html';
    });

    loginButton.addEventListener('click', () => {
        window.location.href = 'login.html';
    });
});
