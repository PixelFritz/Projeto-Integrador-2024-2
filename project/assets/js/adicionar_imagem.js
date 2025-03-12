const profileInput = document.querySelector('.profileInput');
const profilePreview = document.querySelector('.profilePreview');

// Função para pré-visualizar a imagem
profileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    
    if (file) {
        const reader = new FileReader();

        // Quando o arquivo for carregado
        reader.onload = (e) => {
            profilePreview.style.backgroundImage = `url(${e.target.result})`;
            profilePreview.innerHTML = ''; // Remove o ícone "+" após o upload
        };

        reader.readAsDataURL(file); // Lê o arquivo como Data URL
    }
});