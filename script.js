function enviarFormulario(event) {
    event.preventDefault();

    const formData = new FormData(document.querySelector('#meu-formulario'));

    fetch('https://example.com/enviar-formulario', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        window.location.href = 'https://wa.me/qr/7JSITABSVJY7E1';
    })
    .catch(error => {
        console.error(error);
    });
}

document.getElementById('menu-icon').addEventListener('click', function() {
    const nav = document.querySelector('nav.menu-desktop');
    nav.classList.toggle('hidden');
});

document.getElementById('menu-icon').addEventListener('click', function() {
    const nav = document.querySelector('nav.menu-desktop');
    nav.classList.toggle('hidden');
});
