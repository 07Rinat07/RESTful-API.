

async function getPosts(){
    let res = await fetch('https://jsonplaceholder.typicode.com/posts');
    let posts = await res.json();


    // вывод через разметку данных с apiS
    posts.forEach((post) => {
        document.querySelector('.post-list') .innerHTML += `
        <div class="card" style="...">
            <div class="card-body">
                <h5 class="cart-title">${post.title}</h5>
                <p class="card-text">${post.body}</p>          
                <a href="#" class="card-link">Подробнее</a>
            </div>
        </div> 
        `
    })
}
getPosts();
