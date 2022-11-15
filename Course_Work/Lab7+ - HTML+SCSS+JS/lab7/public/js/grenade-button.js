const container = document.querySelector('.some-space');

async function addsmt(link, title) {
    let smtHTML = `<a href="./info-grenade.html${link}" class="btn space-between-btns">${title}</a>`;
    container.insertAdjacentHTML('beforeend', smtHTML);
}

async function Get_SMT() 
{
    fetch("http://localhost:3000/grenade-buttons").then(
        (response)=>{
            return response.text()
        }
    ).then((text)=>{
        let smtArray = JSON.parse(text)
        smtArray.forEach(element => {
            
            lin = `${element.link}`
            title = `${element.title}`

            addsmt(lin, title)
        })
    })
}
Get_SMT();