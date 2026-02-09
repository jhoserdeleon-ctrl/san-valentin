document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');

    // Botón SÍ
    yesBtn.addEventListener('click', () => {
        screen1.classList.add('hidden');
        screen2.classList.remove('hidden');
    });

    // Función para mover el botón NO
    function moveButton() {
        const maxX = window.innerWidth - noBtn.offsetWidth;
        const maxY = window.innerHeight - noBtn.offsetHeight;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        noBtn.style.position = 'fixed';
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    }

    // PC: cuando el mouse se acerca
    noBtn.addEventListener('mouseenter', moveButton);

    // Celular: cuando intentas tocarlo
    noBtn.addEventListener('touchstart', moveButton);

    // Evitar que se pueda presionar
    noBtn.addEventListener('click', (e) => {
        e.preventDefault();
        moveButton();
    });
});
