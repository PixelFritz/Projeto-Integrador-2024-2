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
    //Limpa valores do formulário de cep.
    document.getElementById('cidade').value = ("");
    document.getElementById('bairro').value = ("")
    document.getElementById('uf').value = ("")
    document.getElementById('log').value = ("")
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('uf').value = (conteudo.uf);
        document.getElementById('log').value = (conteudo.logradouro);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};
function aplicarMascaraCPF(cpfInput) {
    let cpf = cpfInput.value;

    // Remove todos os caracteres que não são números
    cpf = cpf.replace(/\D/g, '');

    // Aplica a máscara (XXX.XXX.XXX-XX)
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    // Atualiza o valor no campo de input
    cpfInput.value = cpf;
}