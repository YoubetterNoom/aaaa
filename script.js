document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.getElementById('image-container');
    const imageA = document.getElementById('imageA');
    const imageB = document.getElementById('imageB');
    const clickCounter = document.getElementById('click-counter');
    const largeClickCounter = document.getElementById('large-click-counter');
    const clickSound = document.getElementById('click-sound');
    let clickCount = 0;

    imageContainer.addEventListener('mousedown', (event) => {
        if (event.button === 0) { // Ensure it's the left mouse button
            imageA.classList.add('hidden');
            imageB.classList.remove('hidden');
            clickCount++;
            clickCounter.textContent = clickCount;
            largeClickCounter.textContent = clickCount;
            clickCounter.style.transform = 'scale(1.5)';
            largeClickCounter.style.transform = 'scale(1.2)';
            clickSound.currentTime = 0; // Reset the sound
            clickSound.play(); // Play the sound effect
            setTimeout(() => {
                clickCounter.style.transform = 'scale(1)';
                largeClickCounter.style.transform = 'scale(1)';
            }, 200);
        }
    });

    imageContainer.addEventListener('mouseup', (event) => {
        if (event.button === 0) { // Ensure it's the left mouse button
            imageB.classList.add('hidden');
            imageA.classList.remove('hidden');
        }
    });
});
