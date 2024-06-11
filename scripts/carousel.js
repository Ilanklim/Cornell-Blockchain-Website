const slides = document.querySelectorAll('.quote');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.add('hidden');
        if (i === index) {
            slide.classList.remove('hidden');
        }
    });
}

document.getElementById('next-icon').addEventListener('click', function() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

document.getElementById('previous-icon').addEventListener('click', function() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

document.addEventListener('DOMContentLoaded', function() {
    showSlide(0); // Show the first slide initially
});
