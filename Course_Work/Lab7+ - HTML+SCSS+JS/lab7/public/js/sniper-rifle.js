async function addsmt(id, title, imgSrc1, imgSrc2, gauge, ammo, length1, length2, weight1, weight2, mag, temp, text, step1, step2, step3, step4, step5, step6, step7, step8, step9, step10) {
    let container = document.getElementById(id)
    let smt = document.createElement('div')
    let smtHTML = `<h1>${title}</h1>
                        <div class="only-info bottom-margin">
                            <div>
                                <img src="./images/rif/snip/${imgSrc1}" alt="">
                                <img src="./images/rif/snip/${imgSrc2}" alt="">
                            </div>
                            <div>
                                <div>
                                    <h3>Характеристики:</h3>
                                    <p>Калібр: ${gauge}</p>
                                    <p>Набій: ${ammo}</p>
                                    <p>Довжина: ${length1}</p>
                                    <p>Довжина стволу: ${length2}</p>
                                    <p>Вага з порожнім магазином: ${weight1}</p>
                                    <p>Вага з зарядженим магазином: ${weight2}</p>
                                    <p>Місткість магазину: ${mag} набоїв</p>
                                    <p>Темп стрільби: ${temp}</p>
                                </div>
                                <div>
                                    <p>${text}<BR><BR>Неповне розбирання гвинтівки проводиться для чищення та змащення в наступному порядку:<BR>
                                    ${step1}<BR>${step2}<BR>${step3}<BR>${step4}<BR>${step5}<BR>${step6}<BR>${step7}<BR>${step8}<BR>${step9}<BR>${step10}<BR>
                                    Складання після неповного розбирання проводиться у зворотному порядку.<BR></p>
                                </div>
                            </div>
                        </div>`;
    smt.innerHTML = smtHTML;
    container.append(smt);
}

async function Get_SMT() 
{
    fetch("http://localhost:3000/sniperrifle").then(
        (response)=>{
            return response.text()
        }
    ).then((text)=>{
        let smtArray = JSON.parse(text)
        smtArray.forEach(element => {

            id = `${element.id}`
            title = `${element.title}`
            imgSrc1 = `${element.imgSrc1}`
            imgSrc2 = `${element.imgSrc2}`
            gauge = `${element.gauge}`
            ammo = `${element.ammo}`
            length1 = `${element.length1}`
            length2 = `${element.length2}`
            weight1 = `${element.weight1}`
            weight2 = `${element.weight2}`
            mag = `${element.mag}`
            temp = `${element.temp}`
            text = `${element.text}`
            step1 = `${element.step1}`
            step2 = `${element.step2}`
            step3 = `${element.step3}`
            step4 = `${element.step4}`
            step5 = `${element.step5}`
            step6 = `${element.step6}`
            step7 = `${element.step7}`
            step8 = `${element.step8}`
            step9 = `${element.step9}`
            step10 = `${element.step10}`

            addsmt(id, title, imgSrc1, imgSrc2, gauge, ammo, length1, length2, weight1, weight2, mag, temp, text, step1, step2, step3, step4, step5, step6, step7, step8, step9, step10)
        })
    })
}
Get_SMT();