document.querySelectorAll('.btn-teste').forEach(button => {
    button.addEventListener('click', function() {
        const section = this.closest('.teste_interativo');
        const isSelected = this.classList.contains('selected');

        // Remove the selected class from all buttons
        section.querySelectorAll('.btn-teste').forEach(btn => btn.classList.remove('selected'));

        // Remove existing covers
        section.querySelectorAll('.cover').forEach(cover => cover.remove());

        if (!isSelected) {
            // Add the selected class to the clicked button
            this.classList.add('selected');

            // Find the image container within the button
            const imgContainer = this.querySelector('.img-container');
            if (imgContainer) {
                // Create and add a cover element above the image
                const cover = document.createElement('div');
                cover.innerHTML = `<i class="fa-solid fa-check fa-4x center-i"></i>`
                cover.classList.add('cover');
                cover.style.position = 'absolute';
                cover.style.top = '0';
                cover.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Semi-transparent cover
                cover.style.zIndex = '10'; // Ensure the cover is above the image
                cover.style.display = 'flex';
                cover.style.justifyContent = 'center';
                cover.style.alignItems = 'center';
                cover.style.color = '#999';

                // Ensure the image container has relative positioning
                imgContainer.style.position = 'relative';
                imgContainer.appendChild(cover);
            }
        }
    });
});