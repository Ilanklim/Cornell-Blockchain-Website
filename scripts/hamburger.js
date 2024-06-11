function adjustMenuVisibility() {
    const navMenu = document.getElementById('nav-menu');
    const hamButton = document.getElementById('ham-btn');

    if (window.innerWidth <= 850) {
        navMenu.classList.add('hidden');
        hamButton.classList.remove('hidden');
    } else {
        navMenu.classList.remove('hidden');
        hamButton.classList.add('hidden');
    }
}

document.addEventListener('DOMContentLoaded', adjustMenuVisibility);
window.addEventListener('resize', adjustMenuVisibility);

document.getElementById('ham-btn').addEventListener('click', function() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('hidden');
});
