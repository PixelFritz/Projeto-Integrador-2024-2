const toggleButton = document.getElementById('collapse');
const menu = document.querySelector('.menu-collapse');

toggleButton.addEventListener('click', function(event) {
    event.stopPropagation();
    menu.classList.toggle('show');
});

menu.addEventListener("click", (event) => {
    event.stopPropagation();
});

document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
        menu.classList.remove('show');
    }
});

function toggleBackground(button) {
    button.classList.toggle('ativo');
}