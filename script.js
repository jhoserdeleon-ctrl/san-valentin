document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');

    yesBtn.addEventListener('click', () => {
        screen1.classList.add('hidden');
        screen2.classList.remove('hidden');
    });

    noBtn.addEventListener('mouseover', moveButton);
    noBtn.addEventListener('click', moveButton);

    function moveButton() {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.position = 'fixed';
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    }
});