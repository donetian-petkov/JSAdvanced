function buttonToggle() {
    let button  = document.querySelector('.details-about-me-content-text-button');
    let text = document.querySelector('#details-about-me-content-text-hidden');

    if (button.textContent === "Кой съм аз?") {
        button.textContent = "Прочети по-малко";
        text.style.display = 'block';
    } else {
        button.textContent = "Прочети по-малко";
        button.textContent = "Кой съм аз?";
        text.style.display = 'none';
    }

}

function dropdownToggle() {

    document.getElementById('movies-reviewed-dropdown').addEventListener('change',  searchMovie);
    let div = document.getElementById('movies-reviewed-text');

    function searchMovie(event){

        div.textContent = '';

        let URI = event.target.value;

       fetch('https://www.donetianpetkov.com/' + URI)
           .then(response => response.text())
           .then(function (html) {
            let parser = new DOMParser();
            let doc = parser.parseFromString(html, 'text/html');

            div.innerHTML+=doc.getElementsByClassName('entry-content')[0].innerHTML;

        })
           .catch(error => console.log('Could not get URL', error));
    }
}

function clearText() {
    let div = document.getElementById('movies-reviewed-text');
    div.textContent = 'Тук ще се появи рецензията!';
}

function slideshow() {

    let myIndex = 0;
    carousel();

    function carousel() {
        let i;
        let x = document.getElementsByClassName("image-gallery-content-img");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}
        x[myIndex-1].style.display = "flex";
        setTimeout(carousel, 5000); 
    }
}

function searchBoxOffice(){

    let searchButton = document.getElementById('get-movie-by-box-office-search-button');
    let table = document.getElementById('get-movie-by-box-office-output');
    let inputField = document.getElementById('get-movie-by-box-office-search');


    searchButton.addEventListener('click', boxOfficeInfo);
    inputField.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            searchButton.click();
        }
    });

    function boxOfficeInfo(event){

        table.innerHTML='';

        let input = event.target.parentElement.querySelector('input[type="text"]').value;

        if(input.includes(',')){
            input=input.replace(/,/g, '');
        }
        
        let regex = /[a-zA-Z]/;

        if (regex.test(input)){
            console.log("The input must be a number!");
            return;
        }

        let searchNumber = Number(input);

        fetch('https://imdb-api.com/en/API/BoxOfficeAllTime/k_ar5ghwn9')
            .then(response => response.text())
            .then(function (jsonData) {
                let jsonObjects = JSON.parse(jsonData).items;

                for (let object of jsonObjects) {
                    let tr = "<tr>";
                    let boxOfficeInput = object.worldwideLifetimeGross.substring(1);
                    let boxOffice = Number(boxOfficeInput.replace(/,/g, ''));

                    if (boxOffice >= searchNumber){

                        tr += "<td>" + object.title + "</td>" + "<td>" + object.worldwideLifetimeGross + "</td></tr>";

                        table.innerHTML += tr;

                    }
                }

            })
            .catch(error => console.log('error', error));

    }
}

function clearBoxOffice() {

    let clearButton = document.getElementById('get-movie-by-box-office-clear-button');
    let table = document.getElementById('get-movie-by-box-office-output');

    clearButton.addEventListener('click', clearArea);

    function clearArea() {
        table.innerHTML='';
    }



}
