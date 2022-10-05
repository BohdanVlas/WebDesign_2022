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
            calcCartPriceAndDelivery();
        }
    }
    if (event.target.hasAttribute('data-cart')) {
        const card = event.target.closest('.card')
        const rocketinfo = {
            id: card.dataset.id,
            imSrc: card.querySelector('.rocket-img').getAttribute('src'),
            title: card.querySelector('.rocket-title').innerText,
            rockets: card.querySelector('[data-rockets-in-box]').innerText,
            weight: card.querySelector('.weight').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        }
        const itemInCart = cartWrapper.querySelector(`[data-id="${rocketInfo.id}"]`);
        if (rocketInCart) {
            const counterElement = rocketInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(rocketInfo.counter);
        }
        else {
            const cartRocketHTML = `<div class="cart-item" data-id="${rocketinfo.id}">
                                    <div class="cart-item__top">
                                        <div class="cart-item__img">
                                            <img src="${rocketinfo.imgSrc}" alt="${rocketinfo.title}">
                                        </div>
                                    <div class="cart-item__desc">
                                        <div class="cart-item__title">${rocketinfo.title}</div>
                                        <div class="cart-item__weight">${rocketinfo.itemsInBox} / ${rocketinfo.weight}</div>
                                        <div class="cart-item__details">
                                            <div class="items items--small counter-wrapper">
                                                <div class="items__control" data-action="minus">-</div>
                                                <div class="items__current" data-counter="">${rocketinfo.counter}</div>
                                                <div class="items__control" data-action="plus">+</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
            cartWrapper.insertAdjacentHTML('beforeend', cartRocketHTML);
        }
    }
})

const cartWrapper = document.querySelector('.cart-wrapper');
const cartEmptyBadge = document.querySelector('[data-cart-empty]');
const orderForm = document.querySelector('#order-form');
if (cartWrapper.children.length > 0) {
    cartEmptyBadge.classList.add('none');
    orderForm.classList.remove('none');
} else {
    cartEmptyBadge.classList.remove('none');
    orderForm.classList.add('none');
}
const totalWeightEl = document.querySelector('.total-weight');
let weightTotal = 0;
weightElements.forEach(function (rocket) {
    const amountEl = item.closest('.cart-rocket').querySelector('[data-counter]');
    weightTotal += parseInt(rocket.innerText) * parseInt(amountEl.innerText);
});
totalWeightEl.innerText = weightTotal;