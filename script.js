document.addEventListener('DOMContentLoaded', () => {
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');

// SÍ siempre funciona  
yesBtn.addEventListener('click', () => {  
    screen1.classList.add('hidden');  
    screen2.classList.remove('hidden');  
});  

function moveButton() {  
    const maxX = window.innerWidth - noBtn.offsetWidth;  
    const maxY = window.innerHeight - noBtn.offsetHeight;  

    const x = Math.random() * maxX;  
    const y = Math.random() * maxY;  

    noBtn.style.position = 'fixed';  
    noBtn.style.left = `${x}px`;  
    noBtn.style.top = `${y}px`;  

    // 👇 CLAVE: evita que bloquee otros botones  
    noBtn.style.pointerEvents = 'none';  

    setTimeout(() => {  
        noBtn.style.pointerEvents = 'auto';  
    }, 300);  
}  

// PC  
noBtn.addEventListener('mouseenter', moveButton);  

// Celular  
noBtn.addEventListener('touchstart', (e) => {  
    e.preventDefault();  
    moveButton();  
});  

// Nunca permitir click real  
noBtn.addEventListener('click', (e) => {  
    e.preventDefault();  
    moveButton();  
});

});
