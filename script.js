document.querySelectorAll('.coffee-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('open');
    });
});
