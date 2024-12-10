// Função genérica para alternar estado dos inputs e salvar informações
function handleForm(formId) {
    const form = document.getElementById(formId);
    const editButton = form.querySelector('.editButton');
    const inputs = form.querySelectorAll('.able');
    const profilePreview = document.getElementById('profilePreview');
    let isEditing = false;

    editButton.addEventListener('click', () => {
        if (!isEditing) {
            // Habilita os inputs e altera o texto do botão
            inputs.forEach(input => input.disabled = false);
            editButton.textContent = 'Salvar';
            profilePreview.classList.add('profile-able')
        } else {
            // Salva as alterações e desabilita os inputs novamente
            saveChanges(formId, inputs);
        }
        isEditing = !isEditing;
    });
}

// Função para salvar informações
function saveChanges(formId, inputs) {
    // Coleta os dados dos inputs
    const formData = {};
    inputs.forEach(input => {
        formData[input.name] = input.value;
        input.disabled = true; // Volta a desabilitar os inputs
        profilePreview.classList.remove('profile-able')
    });

    // Altera o texto do botão para "Alterar Informações"
    const editButton = document.querySelector(`#${formId} .editButton`);
    editButton.textContent = 'Alterar Informações';

    // Faz a requisição ao backend para salvar os dados
    fetch(`/save-${formId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })
    // .then(response => {
    //     if (response.ok) {
    //         alert(`Informações do formulário ${formId} salvas com sucesso!`);
    //     } else {
    //         alert(`Erro ao salvar informações do formulário ${formId}.`);
    //     }
    // })
    .catch(error => {
        console.error(`Erro ao salvar informações do formulário ${formId}:`, error);
    });
}

// Inicializa os formulários
handleForm('form1');
handleForm('form2');
