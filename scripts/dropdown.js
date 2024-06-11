function setupDropdown(openButtonId, closeButtonId, contentId) {
    const openButton = document.getElementById(openButtonId);
    const closeButton = document.getElementById(closeButtonId);
    const content = document.getElementById(contentId);

    content.classList.add('hidden');
    closeButton.classList.add('hidden');
    openButton.classList.remove('hidden');

    openButton.addEventListener('click', function() {
        content.classList.remove('hidden');
        openButton.classList.add('hidden');
        closeButton.classList.remove('hidden');
    });

    closeButton.addEventListener('click', function() {
        content.classList.add('hidden');
        closeButton.classList.add('hidden');
        openButton.classList.remove('hidden');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    setupDropdown('accelerator-open', 'accelerator-close', 'accelerator');
    setupDropdown('consulting-open', 'consulting-close', 'consulting');
    setupDropdown('engineering-open', 'engineering-close', 'engineering');
    setupDropdown('trading-open', 'trading-close', 'trading');
    setupDropdown('governance-open', 'governance-close', 'governance');
});
