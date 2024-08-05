document.addEventListener('DOMContentLoaded', () => {
    const certificationImages = document.querySelectorAll('.certification-image');
    const overlays = document.querySelectorAll('.overlay');
    const closeButtons = document.querySelectorAll('.close-button');

    certificationImages.forEach((image, index) => {
        image.addEventListener('click', () => {
            overlays[index].style.display = 'flex';
        });
    });

    closeButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            overlays[index].style.display = 'none';
        });
    });

    // Hide overlay when clicking outside the image
    overlays.forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.style.display = 'none';
            }
        });
    });
});
