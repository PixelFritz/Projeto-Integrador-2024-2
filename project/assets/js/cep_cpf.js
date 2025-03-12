const cep = document.getElementById('cep');
const cidade = document.getElementById('cidade');
const bairro = document.getElementById('bairro');
const estado = document.getElementById('uf');
const logradouro = document.getElementById('log');


cep.addEventListener('input', (event) => {
    let value = event.target.value.replace(/[^0-9]/g, '');

    if (value.length > 8) {
        value = value.slice(0, 8);
    }

    if (value.length > 5) {
        value = value.replace(/(\d{5})(\d{0,2})/, '$1-$2');
    }

    event.target.value = value
});

function limpa_formulário_cep() {
    document.getElementById('cidade').value = ("");
    document.getElementById('bairro').value = ("")
    document.getElementById('uf').value = ("")
    document.getElementById('log').value = ("")
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('uf').value = (conteudo.uf);
        document.getElementById('log').value = (conteudo.logradouro);
    } else {
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {
    var cep = valor.replace(/\D/g, '');

    if (cep != "") {
        var validacep = /^[0-9]{8}$/;

        if (validacep.test(cep)) {
            var script = document.createElement('script');

            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            document.body.appendChild(script);
        } else {
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } else {
        limpa_formulário_cep();
    }
};

function aplicarMascaraCPF(cpfInput) {
    let cpf = cpfInput.value;

    cpf = cpf.replace(/\D/g, '');

    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    cpfInput.value = cpf;
}