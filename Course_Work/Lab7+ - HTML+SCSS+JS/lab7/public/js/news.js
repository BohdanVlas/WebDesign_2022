const container = document.querySelector('.only-news');

async function addnews(title, link, imgSrc) {
    let news = document.createElement('div')
    news.className = 'news-section-1'
    let newsHTML = `<img src="./images/${imgSrc}" alt=""><BR>
                    <a href=${link}>${title}</a>`;
    news.innerHTML = newsHTML;
    container.append(news);
}

async function Get_News() 
{
    fetch("http://localhost:3000/news").then(
        (response)=>{
            return response.text()
        }
    ).then((text)=>{
        let newsArray = JSON.parse(text)
        newsArray.forEach(element => {

            tit = `${element.title}`
            lin = `${element.link}`
            img = `${element.imgSrc}`

            addnews(tit, lin, img)
        })
    })
}
Get_News();