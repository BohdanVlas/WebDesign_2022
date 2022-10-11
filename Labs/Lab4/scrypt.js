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

fetch('https://dummyjson.com/comments?limit=5&skip=6&select=body,postId')
.then(res => res.json())
.then(console.log);


const commentsContainer = document.querySelector('#comments');

// Запускаем getProducts
getComments();

// Асинхронная функция получения данных из файла products.json
async function getProducts() {
	// Получаем данные из products.json
    const response = await fetch('./js/products.json');
    // Парсим данные из JSON формата в JS
    const productsArray = await response.json();
    // Запускаем ф-ю рендера (отображения товаров)
	renderProducts(productsArray);
}

function renderComments(productsArray) {
    commentsArray.forEach(function (item) {
        const commentHTML = `<div class="box">
						        <div class="card mb-4" data-id="${item.id}">
							        <img class="product-img" src="img/roll/${item.imgSrc}" alt="">
							        <div class="card-body text-center">
								        <h4 class="item-title">${item.title}</h4>
								        <p><small data-items-in-box class="text-muted">${item.itemsInBox} шт.</small></p>
								    </div>
							    </div>
					        </div>`;
        commentsContainer.insertAdjacentHTML('beforeend', productHTML);
    });
}