const toggleButtons = document.querySelectorAll('.collapse');

toggleButtons.forEach(button => {
    const menu = document.querySelector(button.getAttribute('data-target'));

    button.addEventListener('click', function(event) {
        event.stopPropagation();
        
        toggleButtons.forEach(otherButton => {
            if (otherButton !== button) {
                const otherMenu = document.querySelector(otherButton.getAttribute('data-target'));
                otherMenu.classList.remove('show');
            }
        });

        menu.classList.toggle('show');
    });

    menu.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !button.contains(event.target)) {
            menu.classList.remove('show');
        }
    });
});

function toggleBackground(button) {
    button.classList.toggle('ativo');
}