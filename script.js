// Função para enviar o formulário
function enviarFormulario(event) {
    event.preventDefault();

    const formData = new FormData(document.querySelector('#meu-formulario'));

    fetch('https://example.com/enviar-formulario', { // Substitua pela URL correta do backend
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            window.location.href = 'https://wa.me/qr/7JSITABSVJY7E1'; // Redireciona para o WhatsApp
        } else {
            alert('Houve um problema ao enviar o formulário. Por favor, tente novamente.');
        }
    })
    .catch(error => {
        console.error(error);
        alert('Houve um erro ao enviar o formulário. Por favor, tente novamente.');
    });
}

// Adiciona o event listener ao formulário
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('meu-formulario');
    form.addEventListener('submit', enviarFormulario);

    // Toggle do menu no mobile (se aplicável)
    const menuIcon = document.getElementById('menu-icon');
    if (menuIcon) {
        menuIcon.addEventListener('click', function() {
            const nav = document.querySelector('nav.menu-desktop');
            nav.classList.toggle('hidden');
        });
    }
});
