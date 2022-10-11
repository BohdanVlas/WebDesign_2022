const commentsContainer = document.querySelector('.box-container');

let response = fetch('https://dummyjson.com/comments?limit=5&skip=6&select=body,postId').then(res => res.json()).then(json => parse(json.comments));

console.log(response);

async function parse(data) {
    for(let element = 0; element < data.length; element++){
        let name = await data[element].user.username;
        let text = await data[element].body;
        renderComment(name, text)
    };
}

function renderComment(name, text) {
    const commentHTML = `<div class="box">
							<h3 class="comment-user">${name}</h3>
							<p>${text}</p>
					    </div>`;
    commentsContainer.append(commentHTML);
}