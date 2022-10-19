const productsContainer = document.querySelector('#box-container');

function buttonClick(){
    fetch("http://localhost:3000/products").then(
        (response)=>{
            return response.text();
        }
    ).then((function (item) {
        const productHTML = `<div class="box" data-id="${id}">
                                <img class="" src="${imgSrc}">
                                <h3 class="title">${title}</h3>
                                <p><small>Кількість в наборі: ${itemsInBox}</small><small data-items-in-box class="text-muted"></small><small>шт</small></p>
                                <p><small>Потужність: </small><small class="power">${power}</small><small>ВТ</small></p>
                                <p><small>Артикул: </small><small class="id">${id}</small></p>
                                </div>`;
        productsContainer.insertAdjacentHTML('beforeend', productHTML);
    }))
}