document.getElementById('apply-btn').addEventListener('click', function() {
    document.getElementById('apply-popup').classList.remove('hidden');
    document.querySelector('.background-modal').classList.remove('hidden'); // Show the dark background
});

document.getElementById('x-button').addEventListener('click', function() {
    document.getElementById('apply-popup').classList.add('hidden');
    document.querySelector('.background-modal').classList.add('hidden'); // Hide the dark background
});
