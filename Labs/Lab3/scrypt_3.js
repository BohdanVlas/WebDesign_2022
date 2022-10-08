function toggleCartStatus() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const orderForm = document.querySelector('#order-form');
    if (cartWrapper.children.length > 0) {
        orderForm.classList.remove('none');
    } else {
        orderForm.classList.add('none');
    }
}