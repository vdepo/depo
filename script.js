document.querySelectorAll('.coffee-card').forEach(card => {
    const cardFooter = card.querySelector('.card-footer');
    const addButton = card.querySelector('.add-to-cart');
    const qtyValue = card.querySelector('.qty-value');
    const minusButton = card.querySelector('.qty-btn.minus');
    const plusButton = card.querySelector('.qty-btn.plus');

    card.addEventListener('click', event => {
        if (event.target.closest('.card-footer')) {
            return;
        }
        card.classList.toggle('open');
    });

    addButton.addEventListener('click', event => {
        event.stopPropagation();
        qtyValue.textContent = '1';
        cardFooter.classList.add('in-cart');
    });

    plusButton.addEventListener('click', event => {
        event.stopPropagation();
        const next = Number(qtyValue.textContent) + 1;
        qtyValue.textContent = String(next);
    });

    minusButton.addEventListener('click', event => {
        event.stopPropagation();
        const next = Number(qtyValue.textContent) - 1;
        if (next <= 0) {
            cardFooter.classList.remove('in-cart');
            qtyValue.textContent = '1';
            return;
        }
        qtyValue.textContent = String(next);
    });
});
