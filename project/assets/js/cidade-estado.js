fetch('assets/json/estados_cidades.json')
    .then(response => response.json())
    .then(data => {
        const estadoSelect = document.getElementById("uf");
        const cidadeSelect = document.getElementById("cidade");

        // Função para preencher o campo de cidades e otimizar o DOM
        function preencherCidades(cidades) {
            // Limpa as opções existentes antes de adicionar as novas
            cidadeSelect.innerHTML = '<option value="default" selected disabled>Selecione a sua cidade</option>';
            cidades.sort((a, b) => a.localeCompare(b));
            const fragment = document.createDocumentFragment();
            cidades.forEach(cidade => {
                const option = document.createElement("option");
                option.value = cidade;
                option.textContent = cidade;
                fragment.appendChild(option);
            });
            cidadeSelect.appendChild(fragment);
        }

        // Preencher o campo de estados em ordem alfabética
        data.sort((a, b) => a.estado.localeCompare(b.estado));
        data.forEach(estado => {
            const option = document.createElement("option");
            option.value = estado.uf;
            option.textContent = estado.estado;
            estadoSelect.appendChild(option);
        });

        // Carregar todas as cidades inicialmente em ordem alfabética
        const todasCidades = data.flatMap(estado => estado.cidades).sort((a, b) => a.localeCompare(b));
        preencherCidades(todasCidades);

        // Filtrar cidades por estado quando um estado for selecionado
        estadoSelect.addEventListener("change", function () {
            const ufSelecionada = this.value;
            if (ufSelecionada === "") {
                preencherCidades(todasCidades); // Exibe todas as cidades se nenhum estado estiver selecionado
            } else {
                const estadoSelecionado = data.find(estado => estado.uf === ufSelecionada);
                if (estadoSelecionado) {
                    preencherCidades(estadoSelecionado.cidades);
                }
            }
        });
    })
    .catch(error => console.error("Erro ao carregar o arquivo JSON:", error));