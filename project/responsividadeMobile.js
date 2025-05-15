function toggleMenu(event) {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const buttonRect = event.currentTarget.getBoundingClientRect();
    
    if (sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
        content.style.marginLeft = '0';
    } else {
        sidebar.style.top = `${buttonRect.bottom}px`;
        sidebar.style.left = `${buttonRect.left}px`;
        sidebar.classList.add('show');
        content.style.marginLeft = '250px';
    }

    if (window.innerWidth <= 768) {
        content.style.marginLeft = '0';
    }
}

function atualizarHeaderResponsivo() {
    let header = document.getElementById('header-principal');
    const container = header.parentElement;
    let btnLateral = document.querySelector('.menuButton')

    if (window.matchMedia("(max-width:480px)").matches) {
        header.innerHTML = `
            <button id="menuResponsivoButton"><img src="assets/imagens/icons/three-dots-vertical.svg" alt="" width="25px"></button>

            <img class="logo" src="assets/imagens/icons/logo.svg" alt="Logo Hospetagem">

            <div class="toggle-menu" onclick="toggleFloatingMenu()">
                <img src="assets/imagens/icons/Subtract.svg" alt="Menu" width="30px">
            </div>`

        if (btnLateral) btnLateral.remove();

        const menuResponsivoButton = document.getElementById('menuResponsivoButton')
        if (menuResponsivoButton) {
            menuResponsivoButton.addEventListener('click', toggleMenu)
        }

    } else {
        header.innerHTML = `<img class="logo" src="assets/imagens/icons/logo.svg" alt="">
            <div class="header-right">
                <div class="toggle-menu" onclick="toggleFloatingMenu()"><img src="assets/imagens/icons/Subtract.svg"
                        alt="">
                </div>
                <div class="user-profile">
                    <img src="assets/imagens/icons/Shape.svg" alt="Usuário">
                    <div class="user-info">
                        <span class="user-name">Usuário</span>
                    </div>
                </div>
                <button class="icon-btn">
                    <img src="assets/imagens/icons/box-arrow-right.svg" alt="">
                </button>
            </div>`

        const menuButton = document.getElementById('menuButton')
        if (menuButton) {
            menuButton.addEventListener('click', toggleMenu)
        } 

        if (!btnLateral) {
            const divButtonLateral = document.createElement('div');
            const btnLateral = document.createElement('button');
            btnLateral.id = 'menuButton';
            btnLateral.className = 'menuButton';
            btnLateral.innerHTML = `<img src="assets/imagens/icons/chevron-down.svg" alt="" width="25px">`;
            btnLateral.addEventListener('click', toggleMenu);
            divButtonLateral.appendChild(btnLateral)

            container.insertBefore(divButtonLateral, header);
        }
    }
}


window.addEventListener("load", atualizarHeaderResponsivo);

window.addEventListener("resize", atualizarHeaderResponsivo);