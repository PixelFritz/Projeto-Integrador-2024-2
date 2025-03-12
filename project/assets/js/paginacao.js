let paginaAtual = 1;

function mostrarPagina(numeroPagina) {
    document.querySelectorAll('.pagina').forEach(pagina => {
        pagina.classList.remove('ativo');
    })

    document.getElementById(`pagina-${numeroPagina}`).classList.add('ativo');
}

function proximaPagina() {
    if (paginaAtual < 3) {
        paginaAtual++;
        mostrarPagina(paginaAtual);
        window.scrollTo(0, 0);
    }
}

function paginaAnterior() {
    if (paginaAtual > 1) {
        paginaAtual--;
        mostrarPagina(paginaAtual);
        window.scrollTo(0, 0);
    }
}