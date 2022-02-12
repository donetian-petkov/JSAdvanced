function attachEvents() {

    document.getElementById('btnLoadPosts').addEventListener('click', getAllPosts);
    document.getElementById('btnViewPost').addEventListener('click', displayPost);

}

attachEvents();

async function displayPost() {
    //get selected value
    //load post
    //load comment
    //render data

    const titleElement = document.getElementById('post-title');
    const bodyElement = document.getElementById('post-body');
    const ulElement = document.getElementById('post-comments');

    titleElement.textContent = 'Loading...';
    bodyElement.textContent='';
    ulElement.replaceChildren();


    const selectedId = document.getElementById('posts').value;

    const [post , comments] = await Promise.all([
        getPostById(selectedId),
        getCommentsById(selectedId)
    ]);

    titleElement.textContent = post.title;
    bodyElement.textContent = post.body;



    comments.forEach(c => {
        const liElement = document.createElement('li');
        liElement.textContent = c.text;
        ulElement.appendChild(liElement);
    })

}

async function getAllPosts(){
    const url = 'http://localhost:3030/jsonstore/blog/posts';

    try {
        const res = await fetch(url);

        if (res.status !== 200){
            throw new Error("Could not get posts!");
        }

        const data = await res.json();
    } catch(error) {
        alert(error.message);
    }

    const selectElement = document.getElementById('posts');
    selectElement.replaceChildren();

    Object.values(data).forEach(p => {
        const optionElement = document.createElement('option');
        optionElement.textContent = p.title;
        optionElement.value = p.id;

        selectElement.appendChild(optionElement);
    })
}

async function getPostById(postId){

    const url = 'http://localhost:3030/jsonstore/blog/posts/' + postId;

    try {
        const res = await fetch(url);

        if (res.status !== 200){
            throw new Error("Could not get post!");
        }

        const data = await res.json();
    } catch (error) {
        alert(error.message);
    }

    return data;

}

async function getCommentsById(postId){
    const url = 'http://localhost:3030/jsonstore/blog/comments';

    try {
        const res = await fetch(url);

        if (res.status !== 200){
            throw new Error("Could not get post!");
        }

        const data = await res.json();
    } catch (error) {
        alert(error.message);
    }

    const comments = Object.values(data).filter(c => c.postId === postId)

    return comments;
}