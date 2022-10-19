async function addproduct(id, title, power, imgSrc) {
    let product = document.createElement('div')
    let container = document.querySelector('.#box-container')

    let ViewerContent = `<div class="box" data-id="${id}">
                            <img class="" src="${imgSrc}">
                            <h3 class="title">${title}</h3>
                            <p><small>Кількість в наборі: ${itemsInBox}</small><small data-items-in-box class="text-muted"></small><small>шт</small></p>
                            <p><small>Потужність: </small><small class="power">${power}</small><small>ВТ</small></p>
                            <p><small>Артикул: </small><small class="id">${id}</small></p>
                        </div>`
    product.innerHTML = ViewerContent;
    container.append(product);
}

async function Get_Product() 
{
    fetch("http://localhost:3000/products").then(
        (response)=>{
            return response.text()
        }
    ).then((text)=>{
        let aboutArray = JSON.parse(text)
        aboutArray.forEach(element => {

            id = `${element.id}`
            tit = `${element.title}`
            pow = `${element.power}`
            img = `${element.imgSrc}`

            addproduct(id, tit, pow, imgSrc)
        })
    })
}
Get_Product();