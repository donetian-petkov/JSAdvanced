const tbody = document.querySelector('tbody');
document.getElementById('loadBooks').addEventListener('click',loadBooks);
const createForm = document.getElementById('createForm');
createForm.addEventListener('submit', onCreate);
tbody.addEventListener('click', onTableClick);
const editForm = document.getElementById('editForm');
editForm.addEventListener('submit', onEditSubmit);
loadBooks();

//function for requests
async function request(url,options){

    if (options && options.body != undefined){
        Object.assign(options, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    const response = await fetch(url,options);

    if (response.ok != true){
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }

    const data = await response.json();

    return data;

}

//load all books
async function loadBooks(){
    const books = await request('http://localhost:3030/jsonstore/collections/books');

    const result = Object.entries(books).map(([id, book]) => createRow(id,book));
    tbody.replaceChildren(...result);
}

function createRow(id, book){
    const row = document.createElement('tr');
    row.innerHTML= `<td>${book.title}</td>
                <td>${book.author}</td>
                <td data-id=${id}>
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                </td>`

    return row;
}

//create book
async function createBook(book) {
    const result = await request('http://localhost:3030/jsonstore/collections/books', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    });

    return result;
}

//update book

async function updateBook(id, book){
    const result = await request('http://localhost:3030/jsonstore/collections/books/'+id, {
        method: 'put',
        body: JSON.stringify(book)
    });

    return result;
}

//delete book
async function deleteBook(id){
    const result = await request('http://localhost:3030/jsonstore/collections/books/'+id, {
        method: 'delete'
    });

    return result;
}

//handle create form

async function onCreate(event){
    event.preventDefault();

    const formData = new FormData(event.target);

    const author = formData.get('author');
    const title = formData.get('title');

    const result = await createBook({author, title});
    tbody.appendChild(createRow(result._id, result));

    event.target.reset();

}
//route the click on the td
function onTableClick(event){
    if(event.target.className==='delete'){
        onDelete(event.target);
    } else if (event.target.className==='edit'){
        onEdit(event.target);
    }
}


//handle edit form
async function onEdit(button){
    const id = button.parentElement.dataset.id;
    const book = await loadBookById(id);
    createForm.style.display='none';
    editForm.style.display='block';

    editForm.querySelector('[name="id"]').value = id;
    editForm.querySelector('[name="author"]').value = book.author;
    editForm.querySelector('[name="title"]').value = book.title;

}

//load book for editing
async function loadBookById(id){
    const book = await request('http://localhost:3030/jsonstore/collections/books/' + id);
    return book;
}

async function onEditSubmit(event){
    event.preventDefault();

    const formData = new FormData(event.target);


    const id = formData.get('id');
    const author = formData.get('author');
    const title = formData.get('title');

    const result = await updateBook(id,{author, title});
    event.target.reset();
    createForm.style.display='block';
    editForm.style.display='none';

    loadBooks();

}

//handle delete button
async function onDelete(button){
    const id = button.parentElement.dataset.id;
    await deleteBook(id);
    button.parentElement.parentElement.remove();
}




