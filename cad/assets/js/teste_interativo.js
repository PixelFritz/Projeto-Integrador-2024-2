document.querySelectorAll('.teste_interativo button').forEach(button => {
    button.addEventListener('click', function() {
        // Remove a classe 'selected' de todos os botões da mesma seção
        const section = this.closest('.teste_interativo');
        section.querySelectorAll('button').forEach(btn => btn.classList.remove('selected'));

        // Adiciona a classe 'selected' ao botão clicado
        this.classList.add('selected');
    });
});
