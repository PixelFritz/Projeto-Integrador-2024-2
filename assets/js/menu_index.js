document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const menuLinks = document.getElementById('menu-nav');
    const menuEntrar = Array.from(document.getElementsByClassName('entrar'));
    const links = Array.from(document.getElementsByClassName('link-nav'));
    const iconContainer = document.querySelectorAll('.lista-nav');

    menuBtn.addEventListener('click', function() {
        if(menuLinks.classList.contains('menu-active')) {
            menuLinks.classList.remove('menu-active')
            menuBtn.classList.remove('ativo')

            for (let i = 0; i < menuEntrar.length; i++) {
                menuEntrar[i].classList.add('menu-hide')
            }
            
            for (let i = 0; i < links.length; i++) {
                links[i].classList.add('link-nav');
                links[i].classList.remove('menu-a-link');
            }
        } else {
            menuLinks.classList.add('menu-active')
            menuBtn.classList.add('ativo')
            
            for (let i = 0; i < menuEntrar.length; i++) {
                menuEntrar[i].classList.remove('menu-hide')
            }

            for (let i = 0; i < links.length; i++) {
                links[i].classList.add('menu-a-link');
                links[i].classList.remove('link-nav');
            }

            iconContainer.forEach(function(iconContainer) {
                let menuIcon = iconContainer.querySelector('i');
                if(!menuIcon) {
                    menuIcon = document.createElement('i');
                    menuIcon.classList.add('fa-solid', 'fa-arrow-up-right-from-square', 'menu-icon');

                    iconContainer.appendChild(menuIcon)
                }
            })
        }
    });
});