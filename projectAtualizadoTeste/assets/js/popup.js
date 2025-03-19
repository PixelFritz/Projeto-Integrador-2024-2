document.querySelectorAll('.popupButton').forEach(button => {
    button.addEventListener('click', function() {
        const popupId = this.getAttribute('data-popup-id');
        handlePopup(popupId);
    });
});

function handlePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (!popup) {
        console.error(`Popup with ID '${popupId}' not found.`);
        return;
    }
    popup.classList.add('show');

    // Add event listener to close popup when clicking outside the box-popup
    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            closePopup(popupId);
        }
    });

    // Prevent click events inside the box-popup from propagating to the popup
    const boxPopup = popup.querySelector('.box-popup');
    if (boxPopup) {
        boxPopup.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    }
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (!popup) {
        console.error(`Popup with ID '${popupId}' not found.`);
        return;
    }
    popup.classList.remove('show');
}