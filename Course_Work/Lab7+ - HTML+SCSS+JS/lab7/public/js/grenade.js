async function addsmt(id, title, imgSrc, weight, weight1, rozlit, text) {
    let container = document.getElementById(id)
    let smt = document.createElement('div')
    let smtHTML = `<h1>${title}</h1>
                        <div class="only-info bottom-margin">
                            <div>
                                <img src="./images/gren/${imgSrc}" alt="">
                            </div>
                            <div>
                                <div>
                                    <h3>Характеристики:</h3>
                                    <p>Маса вибухової речовини: ${weight}г</p>
                                    <p>Маса: ${weight1}г</p>
                                    <p>Розліт уламків: ${rozlit}м</p>
                                </div>
                                <div>
                                    <p>${text}<BR></p>
                                </div>
                            </div>
                        </div>`;
    smt.innerHTML = smtHTML;
    container.append(smt);
}

async function Get_SMT() 
{
    fetch("http://localhost:3000/grenade").then(
        (response)=>{
            return response.text()
        }
    ).then((text)=>{
        let smtArray = JSON.parse(text)
        smtArray.forEach(element => {

            id = `${element.id}`
            tit = `${element.title}`
            img = `${element.imgSrc1}`
            wei = `${element.weight}`
            wei1 = `${element.weight1}`
            rzl = `${element.rozlit}`
            txt = `${element.text}`

            addsmt(id, tit, img, wei, wei1, rzl, txt)
        })
    })
}
Get_SMT();