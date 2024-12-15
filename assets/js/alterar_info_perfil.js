function handleForm(formId) {
    const form = document.getElementById(formId);
    const editButton = form.querySelector('.editButton');
    const inputs = form.querySelectorAll('.able');
    const profilePreview = document.getElementById('profilePreview');
    let isEditing = false;

    editButton.addEventListener('click', () => {
        if (!isEditing) {
            inputs.forEach(input => input.disabled = false);
            editButton.textContent = 'Salvar';
            profilePreview.classList.add('profile-able')
        } else {
            saveChanges(formId, inputs);
        }
        isEditing = !isEditing;
    });
}

function saveChanges(formId, inputs) {
    const formData = {};
    inputs.forEach(input => {
        formData[input.name] = input.value;
        input.disabled = true;
        profilePreview.classList.remove('profile-able')
    });

    const editButton = document.querySelector(`#${formId} .editButton`);
    editButton.textContent = 'Alterar Informações';

    fetch(`/save-${formId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })
    .catch(error => {
        console.error(`Erro ao salvar informações do formulário ${formId}:`, error);
    });
}

handleForm('form1');
handleForm('form2');
