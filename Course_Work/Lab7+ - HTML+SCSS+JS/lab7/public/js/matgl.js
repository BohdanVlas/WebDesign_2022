async function addsmt(id, title, imgSrc1, imgSrc2, imgSrc3, gauge, ammo, length, weight, text, step1, step2, step3, step4, step5, step6, step7, step8, step9) {
    let container = document.getElementById(id)
    let smt = document.createElement('div')
    let smtHTML = `<h1>${title}</h1>
                        <div class="only-info bottom-margin">
                            <div>
                                <img src="../images/gl/matgl/${imgSrc1}" alt="">
                                <img src="./images/gl/matgl/${imgSrc2}" alt="">
                                <img src="./images/gl/matgl/${imgSrc3}" alt="">
                            </div>
                            <div>
                                <div>
                                    <h3>Характеристики:</h3>
                                    <p>Калібр: ${gauge}</p>
                                    <p>Набій: ${ammo}</p>
                                    <p>Довжина: ${length}</p>
                                    <p>Вага: ${weight}</p>
                                </div>
                                <div>
                                    <p>${text}<BR><BR>Заряджання гранатомету:<BR>
                                    ${step1}<BR>${step2}<BR>${step3}<BR>${step4}<BR>${step5}<BR>${step6}<BR>${step7}<BR>${step8}<BR>${step9}<BR></p>
                                </div>
                            </div>
                        </div>`;
    smt.innerHTML = smtHTML;
    container.append(smt);
}

async function Get_SMT() 
{
    fetch("http://localhost:3000/matgl").then(
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
            imgSrc3 = `${element.imgSrc3}`
            gauge = `${element.gauge}`
            ammo = `${element.ammo}`
            length1 = `${element.length}`
            weight1 = `${element.weight}`
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

            addsmt(id, title, imgSrc1, imgSrc2, imgSrc3, gauge, ammo, length1, weight1, text, step1, step2, step3, step4, step5, step6, step7, step8, step9)
        })
    })
}
Get_SMT();