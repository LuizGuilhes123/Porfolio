// Função para enviar o formulário
async function enviarFormulario(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const celular = document.getElementById('celular').value;
    const mensagem = document.getElementById('mensagem').value;

    const dados = { nome, email, celular, mensagem };

    try {
        const response = await axios.post('http://localhost:8080/api/contatos', dados);

        if (response.status === 200) {
            alert('Mensagem enviada com sucesso!');
            document.getElementById('meu-formulario').reset();
            fecharModal();
        } else {
            alert('Houve um problema ao enviar a mensagem. Por favor, tente novamente.');
        }
    } catch (error) {
        console.error(error);
        alert('Houve um erro ao enviar a mensagem. Por favor, tente novamente.');
    }
}

// Função para abrir o modal
function abrirModal() {
    const modal = document.getElementById('contact-modal');
    modal.classList.remove('hidden');
}

// Função para fechar o modal
function fecharModal() {
    const modal = document.getElementById('contact-modal');
    modal.classList.add('hidden');
}

// Adiciona os event listeners ao carregar o DOM
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('meu-formulario');
    form.addEventListener('submit', enviarFormulario);

    const openModalButton = document.getElementById('open-modal');
    openModalButton.addEventListener('click', abrirModal);

    const closeModalButton = document.getElementById('close-modal');
    closeModalButton.addEventListener('click', fecharModal);

    // Fecha o modal ao clicar fora do conteúdo
    const modal = document.getElementById('contact-modal');
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            fecharModal();
        }
    });
});
