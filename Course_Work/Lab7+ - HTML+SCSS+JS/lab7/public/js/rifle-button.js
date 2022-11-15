const container1 = document.querySelector('.buttons1');
const container2 = document.querySelector('.buttons2');
const container3 = document.querySelector('.buttons3');

async function addsmt1(link, title) {
    let smtHTML = `<a href="./info-rifle-assault_rifle.html${link}" class="btn space-between-btns">${title}</a>`;
    container1.insertAdjacentHTML('beforeend', smtHTML);
}
async function addsmt2(link, title) {
    let smtHTML = `<a href="./info-rifle-sniper_rifle.html${link}" class="btn space-between-btns">${title}</a>`;
    container2.insertAdjacentHTML('beforeend', smtHTML);
}
async function addsmt3(link, title) {
    let smtHTML = `<a href="./info-rifle-machine_gun.html${link}" class="btn space-between-btns">${title}</a>`;
    container3.insertAdjacentHTML('beforeend', smtHTML);
}

async function Get_SMT() 
{
    fetch("http://localhost:3000/assault-rifle-button").then(
        (response)=>{
            return response.text()
        }
    ).then((text)=>{
        let smtArray = JSON.parse(text)
        smtArray.forEach(element => {
            
            lin = `${element.link}`
            title = `${element.title}`

            addsmt1(lin, title)
        })
    })
    fetch("http://localhost:3000/machine-gun-button").then(
        (response)=>{
            return response.text()
        }
    ).then((text)=>{
        let smtArray = JSON.parse(text)
        smtArray.forEach(element => {
            
            lin = `${element.link}`
            title = `${element.title}`

            addsmt3(lin, title)
        })
    })
    fetch("http://localhost:3000/sniper-rifle-button").then(
        (response)=>{
            return response.text()
        }
    ).then((text)=>{
        let smtArray = JSON.parse(text)
        smtArray.forEach(element => {
            
            lin = `${element.link}`
            title = `${element.title}`

            addsmt2(lin, title)
        })
    })
}
Get_SMT();