const buttonsOrder = document.querySelectorAll('.product__button-order');
const overLayOrder = document.querySelector('.overlay_order');
const order = overLayOrder.querySelector('.modal__order');

buttonsOrder.forEach(buttonOrder => {
    buttonOrder.addEventListener('click', () => {
        overLayOrder.classList.add('overlay_active');
        order.value = buttonOrder.dataset.order;
    })
});

overLayOrder.addEventListener('click', event => {
    const target = event.target;
    console.log('target', target);

    if(target === overLayOrder || target.closest('.modal__close')) {
        overLayOrder.classList.remove('overlay_active');
    }
    })