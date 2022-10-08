const cartWrapper =  document.querySelector('.cart-wrapper');
window.addEventListener('click', function (event) {
	if (event.target.hasAttribute('data-cart')) {
		const card = event.target.closest('.box');
		const rocketinfo = {
			id: card.dataset.id,
            title: card.querySelector('.rocket-title').innerText,
            weight: card.querySelector('.weight').innerText,
            counter: card.querySelector('[data-counter]').innerText,
		};
		const rocketInCart = cartWrapper.querySelector(`[data-id="${rocketinfo.id}"]`);
		if (rocketInCart) {
			const counterElement = rocketInCart.querySelector('[data-counter]');
			counterElement.innerText = parseInt(counterElement.innerText) + parseInt(rocketinfo.counter);
		} else {
			const cartRocketHTML = `<div class="cart-item" data-id="${rocketinfo.id}">
                                        <div class="cart-item__desc">
                                            <div class="cart-item__title">${rocketinfo.title}</div>
                                            <div class="cart-item__weight">${rocketinfo.weight} кг</div>
                                            <div class="cart-item__details">
                                                <div class="items items--small counter">
                                                    <div class="items__control btn1" data-action="minus">-</div>
                                                    <div class="items__current btn1" data-counter>${rocketinfo.counter}</div>
                                                    <div class="items__control btn1" data-action="plus">+</div>
                                                </div>
                                            </div>
                                        </div>
                                 </div>`;
			cartWrapper.insertAdjacentHTML('beforeend', cartRocketHTML);
		}
		card.querySelector('[data-counter]').innerText = '1';
		toggleCartStatus();
		calcCartWeight();
	}
});