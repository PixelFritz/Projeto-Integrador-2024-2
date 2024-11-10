document.addEventListener("DOMContentLoaded", () => {
    // Seleciona os elementos radio e as sections
    const pixRadio = document.querySelector('input[type="radio"][value="Pix"]');
    const debitoRadio = document.querySelector('input[type="radio"][value="Cartão de Débito"]');
    const creditoRadio = document.querySelector('input[type="radio"][value="Cartão de Crédito"]');
    const dadosCartaoSection = document.querySelector(".dados-cartao");
    const pagamentoPixSection = document.querySelector(".pagamento_pix");

    // Função para alternar as seções
    function toggleSections() {
        if (pixRadio.checked) {
            pagamentoPixSection.style.display = "block";
            dadosCartaoSection.style.display = "none";
        } else if (debitoRadio.checked || creditoRadio.checked) {
            dadosCartaoSection.style.display = "block";
            pagamentoPixSection.style.display = "none";
        } else {
            pagamentoPixSection.style.display = "none";
            dadosCartaoSection.style.display = "none";
        }
    }

    // Adiciona um listener para cada opção de radio
    pixRadio.addEventListener("change", toggleSections);
    debitoRadio.addEventListener("change", toggleSections);
    creditoRadio.addEventListener("change", toggleSections);

    // Executa a função uma vez para garantir que as seções estejam ocultas no início
    toggleSections();
});

// Seleciona os elementos de rádio e o botão
const btnConfirmar = document.querySelector('.btn-confirmar');
const radioDebito = document.getElementById('debito');
const radioCredito = document.getElementById('credito');
const radioPix = document.getElementById('pix');

// Função para verificar a seleção de pagamento
function atualizarVisibilidadeBotao() {
    if (radioDebito.checked || radioCredito.checked) {
        btnConfirmar.style.display = 'block'; // Mostra o botão
    } else {
        btnConfirmar.style.display = 'none'; // Oculta o botão
    }
}

// Adiciona eventos de clique para monitorar as seleções
radioDebito.addEventListener('change', atualizarVisibilidadeBotao);
radioCredito.addEventListener('change', atualizarVisibilidadeBotao);
radioPix.addEventListener('change', atualizarVisibilidadeBotao);

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const confirmButton = document.querySelector(".btn-confirmar");

    confirmButton.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    document.querySelector(".delete").addEventListener("click", function () {
        modal.style.display = "none";
    });
});

document.getElementById('confirmar-pagamento').addEventListener('click', function() {
    window.location.href = 'pagamento-realizado.html';
});