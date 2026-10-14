document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Merci ! Votre message a bien été envoyé.');
            form.reset();
        });
    }
});