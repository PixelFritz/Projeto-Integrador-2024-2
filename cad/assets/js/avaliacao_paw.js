document.querySelectorAll('.avaliacao').forEach(function(avaliacao) {
    const avaliar = avaliacao.getAttribute('data-rating');
    const patinhasContainer = avaliacao.querySelector('.patinhas');

    for (let i = 0; i < avaliar; i++) {
        const icon = document.createElement('i');
        icon.classList.add('fas', 'fa-paw')
        icon.style.color = '#FFD43B';
        patinhasContainer.appendChild(icon)
    }
})