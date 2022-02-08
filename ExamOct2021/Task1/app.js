window.addEventListener('load', solve);

function solve() {

    let form = document.getElementsByTagName('form');
    let divAllHits = document.querySelector('.all-hits-container');

    form[0].addEventListener('submit', submitSong);

    function submitSong(event){

        event.preventDefault();

        let divAllHitsInfo = document.createElement('div');
        divAllHitsInfo.classList.add('hits-info');

        let img = document.createElement('img');
        img.src = './static/img/img.png';
        divAllHitsInfo.appendChild(img);

        let genreInput = event.target.parentElement.querySelector('input[name="genre"]');
        let nameInput = event.target.parentElement.querySelector('input[name="name"]');
        let authorInput = event.target.parentElement.querySelector('input[name="author"]');
        let dateInput = event.target.parentElement.querySelector('input[name="date"]');

        let inputArray = [genreInput , nameInput , authorInput , dateInput];

        for (let input of inputArray) {
            if (input.value === '') {
                return false;
            }
        }


        let genreOutput = document.createElement('h2');
        genreOutput.textContent = `Genre: ${genreInput.value}`;
        let songOutput = document.createElement('h2');
        songOutput.textContent =  `Name: ${nameInput.value}`;
        let authorOutput = document.createElement('h2');
        authorOutput.textContent = `Author: ${authorInput.value}`;
        let dateOutput = document.createElement('h3');
        dateOutput.textContent = `Date: ${dateInput.value}`;
        dateOutput.name='date';

        divAllHitsInfo.appendChild(genreOutput);
        divAllHitsInfo.appendChild(songOutput);
        divAllHitsInfo.appendChild(authorOutput);
        divAllHitsInfo.appendChild(dateOutput);

        let saveBtn = document.createElement('button');
        saveBtn.classList.add('save-btn');
        saveBtn.textContent = 'Save song';
        let likeBtn = document.createElement('button');
        likeBtn.classList.add('like-btn');
        likeBtn.textContent = 'Like song';
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';

        saveBtn.addEventListener('click',saveSong);
        likeBtn.addEventListener('click', likeSong);
        deleteBtn.addEventListener('click', deleteSong);


        divAllHitsInfo.appendChild(saveBtn);
        divAllHitsInfo.appendChild(likeBtn);
        divAllHitsInfo.appendChild(deleteBtn);

        divAllHits.appendChild(divAllHitsInfo);

    }


    function likeSong(event){

        let likes = document.getElementsByClassName('likes')[0];
        let p = likes.getElementsByTagName('p')[0];
        let numberOfLikes = Number(p.textContent.split(' ')[2]);

        numberOfLikes++;

        p.remove();

        let newP = document.createElement('p');
        newP.textContent = `Total Likes: ${numberOfLikes}`;
        let img = likes.getElementsByTagName('img')[0];
        likes.insertBefore(newP, img);

        let likeBtn =  event.target.parentElement.getElementsByClassName('like-btn')[0];

        likeBtn.disabled=true;

    }

    function saveSong(event) {

        let div = event.target.parentElement;

        let newDiv = div;

        div.remove();

        let likeBtn = newDiv.getElementsByClassName('like-btn')[0];
        likeBtn.remove();

        let saveBtn = newDiv.getElementsByClassName('save-btn')[0];
        saveBtn.remove();

        let divSavedHits = document.getElementsByClassName('saved-container')[0];
        divSavedHits.appendChild(newDiv);

    }

    function deleteSong(event) {

        let div = event.target.parentElement;
        div.remove();

    }


}