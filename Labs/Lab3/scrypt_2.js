function calcCartWeight() {
	let weightTotal = 0;
	const cartWrapper = document.querySelector('.cart-wrapper');
	const weightElements = cartWrapper.querySelectorAll('.cart-item__weight');
	const totalWeightEl = document.querySelector('.total-weight');
	weightElements.forEach(item => weightTotal += parseInt(item.innerText) * parseInt(item.closest('.cart-item').querySelector('[data-counter]').innerText), console.log(weightTotal));
	totalWeightEl.innerText = weightTotal;
}