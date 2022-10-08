function calcCartWeight() {
	const cartWrapper = document.querySelector('.cart-wrapper');
	const weightElements = cartWrapper.querySelectorAll('.weight');
	const totalWeightEl = document.querySelector('.total-weight');
	let weightTotal = 0;
	weightElements.forEach(function (item) {
		const amountEl = item.closest('.cart-item').querySelector('[data-counter]');
		weightTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
	});
	totalWeightEl.innerText = weightTotal;
}