function cancel() {
    const navbar = document.querySelector('.dropdown');
    navbar.style.transform = 'translateY(-500%)';
}

function hamburg() {
    const navbar = document.querySelector('.dropdown');
    navbar.style.transform = 'translateY(0px)';
}

const texts = [
    "DEVELOPER",
    "DESIGNER",
    "FULL-STACK"
];

let speed = 100;
const textElement = document.querySelector('.typewriter-text');
let textIndex = 0;
let charIndex = 0;

function typewriter() {
    if (charIndex < texts[textIndex].length) {
        textElement.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typewriter, speed);
    } else {
        setTimeout(() => {
            eraseText(); // Corrected function name
        }, 2000);
    }
}

function eraseText() {
    if (textElement.innerHTML.length > 0) {
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charIndex = 0;
        setTimeout(typewriter, 500);
    }
}

window.onload = typewriter;