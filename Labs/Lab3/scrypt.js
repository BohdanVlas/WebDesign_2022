window.addEventListener('click', function (event) {
    let cnt;
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const count = event.target.closest('.counter');
        cnt = count.querySelector('[data-counter]');
    }
    if (event.target.dataset.action === 'plus') {
        cnt.innerText = ++cnt.innerText;
    }
    if (event.target.dataset.action === 'minus') {
        if (parseInt(cnt.innerText) > 1) {
            cnt.innerText = --cnt.innerText;
        }
        else if (event.target.closest('.cart-wrapper') && parseInt(cnt.innerText) === 1) {
            event.target.closest('.cart-item').remove();
            toggleCartStatus();
            calcCartWeight();
        }
    }
})