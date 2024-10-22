const slides = document.querySelectorAll('.carrosel-item');
const pontos = document.querySelectorAll('.ponto');
let currentIndex = 1;
const intervalTime = 5000; // Tempo em milissegundos entre as transições
let autoSlide = setInterval(showNextSlide, intervalTime);

// Função para exibir o próximo slide
function showNextSlide() {
    slides[currentIndex].classList.remove('ativo');
    pontos[currentIndex].classList.remove('ativo');

    currentIndex = (currentIndex + 1) % slides.length; // Move para o próximo slide, e volta ao início quando chegar ao fim

    slides[currentIndex].classList.add('ativo');
    pontos[currentIndex].classList.add('ativo');

    updateCarroselPosition();
}

// Atualiza a posição do carrossel
function updateCarroselPosition() {
    const carroselInner = document.querySelector('.carrosel-inner');
    const offset = -(currentIndex * 100); // Desloca os slides horizontalmente
    carroselInner.style.transform = `translateX(${offset}%)`;
}

// Adiciona evento de clique nas bolinhas (indicadores)
pontos.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(autoSlide); // Para o intervalo automático ao clicar
        slides[currentIndex].classList.remove('ativo');
        pontos[currentIndex].classList.remove('ativo');
        currentIndex = index;
        slides[currentIndex].classList.add('ativo');
        pontos[currentIndex].classList.add('ativo');
        updateCarroselPosition();
        autoSlide = setInterval(showNextSlide, intervalTime); // Reinicia o intervalo
    });
});

const cep = document.getElementById('teste');

cep.addEventListener('input')