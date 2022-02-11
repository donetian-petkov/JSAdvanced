let topButton = document.getElementById("goToTop");
window.onscroll = function() {scrollFunction()};

function clearField() {
    let clearButtons = document.querySelectorAll('[id$="clear"]'); // we get all of the elements which id's end with the 'clear' string

    for (let button of clearButtons) {
        button.addEventListener('click', clear); // we set eventListeners on each found element
    }

    function clear(event){
        let parentElement = event.target.parentElement.querySelector('[id$="output"]'); // we get all of the elements which id's end with the 'output' string

        // some additional steps for the comment section clear button - we hide the clear button and instead show the button that displays the comments
        if (event.target.id === 'comment-section-clear') {
            document.getElementById('comment-section-show-button').style.display = 'block';
            event.target.style.display='none';
        }

        parentElement.innerHTML='';
        parentElement.style.display='none';
        event.target.style.display='none';
    }
}


function buttonToggle() {
    let button  = document.querySelector('.details-about-me-content-text-button'); // we need the button to change its textContent
    let text = document.querySelector('#details-about-me-content-text-hidden'); // we get the text which by default has its display to none to hide it

    if (button.textContent === "Кой съм аз?") {
        button.textContent = "Прочети по-малко";
        text.style.display = 'block';
    } else {
        button.textContent = "Прочети по-малко";
        button.textContent = "Кой съм аз?";
        text.style.display = 'none';
    }

}

function slideshow() {

    let myIndex = 0;
    carousel();

    function carousel() {
        let images = document.getElementsByClassName("image-gallery-content-img"); // we get all of the images with class image-gallery-content-img
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > images.length) {myIndex = 1}
        images[myIndex-1].style.display = "inline-block";
        setTimeout(carousel, 5000); // We use recursion to set the display to flex for the next image after waiting 5 seconds
    }
}

function searchBoxOffice(){

    let searchButton = document.getElementById('get-movie-by-box-office-boxoffice-button');
    let table = document.getElementById('get-movie-by-box-office-boxoffice-output');
    let inputField = document.getElementById('get-movie-by-box-office-boxoffice-input');

    searchButton.addEventListener('click', boxOfficeInfo);
    inputField.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            searchButton.click();
        }
    });

    function boxOfficeInfo(event){

        table.innerHTML='';
        table.style.display='block';
        let clearButton = event.target.parentElement.querySelector('[id$="clear"]');
        clearButton.style.display='block';

        let input = event.target.parentElement.querySelector('input[type="text"]').value;



        // as the input may contain commas we need to remove them to convert the input to number
        if(input.includes(',')){
            input=input.replace(/,/g, '');
        }

        // the input must be a number and we can not allow to be text
        let regex = /[a-zA-Z]/;

        if (regex.test(input)){
            console.log("The input must be a number!");
            return;
        }

        let searchNumber = Number(input);

        // the result will be JSON and this is why we are using JSON.parse
        fetch('https://imdb-api.com/en/API/BoxOfficeAllTime/k_72recc02')
            .then(response => response.json())
            .then(function (jsonData) {
                let jsonObjects = jsonData.items;
                let tr = "<tr>";

                for (let object of jsonObjects) {

                    let boxOfficeInput = object.worldwideLifetimeGross.substring(1);
                    let boxOffice = Number(boxOfficeInput.replace(/,/g, ''));

                    if (boxOffice >= searchNumber){

                        tr += "<td>" + object.rank + "</td>" + "<td>" + object.title + "</td>" + "<td>" + object.worldwideLifetimeGross + "</td></tr>";


                    }
                }

                if (tr === '<tr>'){
                    table.innerHTML = 'Не е намерен филм!';
                } else {
                    table.innerHTML += tr;
                }

            })
            .catch(error => console.log('Could not get URL', error));

    }
}

function searchMovie(){
    let searchButton = document.getElementById('get-movie-by-box-office-movie-button');
    let table = document.getElementById('get-movie-by-box-office-movie-output');
    let inputField = document.getElementById('get-movie-by-box-office-movie-input');

    searchButton.addEventListener('click', search);
    inputField.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            searchButton.click();
        }
    });

    function search(event){

        table.innerHTML='';
        table.style.display='block';
        let clearButton = event.target.parentElement.querySelector('[id$="clear"]');
        clearButton.style.display='block';

        let input = event.target.parentElement.querySelector('input[type="text"]').value;

        fetch('https://imdb-api.com/en/API/BoxOfficeAllTime/k_72recc02')
            .then(response => response.json())
            .then(function (jsonData) {
                let jsonObjects = jsonData.items;
                let tr = "<tr>";

                for (let object of jsonObjects) {

                    let movie = object.title;

                    if (movie.toLowerCase() === input.toLowerCase()){

                        tr += "<td>" + object.rank + "</td>" +
                            "<td>" + object.title + "</td>" +
                            "<td>" + object.worldwideLifetimeGross +
                            "<td>" + object.year + "</td>" + "</td></tr>";


                    }
                }

                if (tr === '<tr>'){
                    table.innerHTML = 'Не е намерен филм!';
                } else {
                    table.innerHTML += tr;
                }

            })
            .catch(error => console.log('Could not get URL', error));
    }

}

function searchYear(){
    let searchButton = document.getElementById('get-movie-by-box-office-year-button');
    let table = document.getElementById('get-movie-by-box-office-year-output');
    let inputField = document.getElementById('get-movie-by-box-office-year-input');

    searchButton.addEventListener('click', search);

    inputField.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            searchButton.click();
        }
    });

    function search(event){

        table.innerHTML='';
        table.style.display='block';
        let clearButton = event.target.parentElement.querySelector('[id$="clear"]');
        clearButton.style.display='block';

        let input = event.target.parentElement.querySelector('input[type="text"]').value;

        let regex = /[a-zA-Z]/;

        if (regex.test(input)){
            console.log("The input must be a number!");
            return;
        }

        let searchYear = Number(input);

        fetch('https://imdb-api.com/en/API/BoxOfficeAllTime/k_72recc02')
            .then(response => response.json())
            .then(function (jsonData) {
                let jsonObjects = jsonData.items;
                let tr = "<tr>";

                for (let object of jsonObjects) {

                    let year = Number(object.year);

                    if (year === searchYear){

                        tr += "<td>" + object.rank + "</td>" +
                            "<td>" + object.title + "</td>" +
                            "<td>" + object.year + "</td></tr>";

                    }
                }

                if (tr === '<tr>'){
                    table.innerHTML = 'Не е намерен филм!';
                } else {
                    table.innerHTML += tr;
                }

            })
            .catch(error => console.log('Could not get URL', error));
    }

}

function searchReview() {

    document.getElementById('movies-reviewed-dropdown').addEventListener('change',  searchMovie); // we set an eventListener to the dropdown menu, which upon click should execute the searchMovie function
    let div = document.getElementById('movies-reviewed-text-output'); // we get the div where we will post the review
    let clearButton = document.querySelector('#movies-reviewed-text-clear'); // we get the clear button which by default has its display set to none


    function searchMovie(event){

        div.textContent = ''; // we reset the content in the div where the reviews are posted

        let URI = event.target.value; // we get the URI from the value of the dropdown options as they resemble the URI's of the reviews' pages

        // we work with DOMParser here as the fetched data is HTML
        fetch('https://www.donetianpetkov.com/' + URI)
            .then(response => response.text())
            .then( (html) => {
                let parser = new DOMParser();
                let doc = parser.parseFromString(html, 'text/html'); // we parse the received text (html) to HTML to easily manage it

                let review = doc.getElementsByClassName('entry-content')[0].innerHTML;
                div.insertAdjacentHTML('beforeend', review);
                div.style.display = 'inline-block'; // by default the div container has display set to none to hide it
                clearButton.style.display='inline-block'; // here we display the button to clear the review text

            })
            .catch(error => console.log('Could not get URL', error));
    }
}

function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
}

function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function showComments() {
    let output = document.getElementById('comment-section-output');
    let showButton = document.getElementById('comment-section-show-button');
    let clearButton = document.getElementById('comment-section-clear');

    showButton.addEventListener('click',listComments);

    function listComments(){
        fetch('listComments.php', {
            method: 'POST'
        })
            .then(response => response.text())
            .then(data => {
                if (!data.includes('div')) {
                    output.innerHTML += '<p class="comment-section-comment-none-found">Няма намерени коментари!<p>';
                } else {
                    output.innerHTML += data;
                }
            })
            .catch(error => console.log('Could not get URL', error));

        output.style.display='block';
        showButton.style.display='none';
        clearButton.style.display='block';
    }

}

function addComments(){
    let name = document.getElementById('comment-section-name');
    let comment = document.getElementById('comment-section-textarea');

    if (name.value === '') {
        name.placeholder = 'Моля въведете си името!'
        return;
    } else if (comment.value === '') {
        comment.placeholder = 'Не можете да изпратите празен коментар!';
        return;
    }

    // as we need to send the values from the name and the comment input fields to the name
    // and content variables in the addComment.php file we use form data to wrap them
    // you may comment the jquery and use the below fetch to verify that it works as expected - I just wanted to try both methods
    /* let formData = new FormData();
    formData.append('name', name.value);
    formData.append('content', comment.value);


    fetch('addComment.php', {
        method: 'POST', body: formData
    })
        .then(function (response) {
            return response.text();
        })
        .then(function (body) {
            console.log('Successfully Added Comment!');
        })
        .catch(error => console.log('Could not get URL', error));*/

    $.ajax({
        type: "POST",
        url: "addComment.php",
        data:{ name: name.value ,
        content: comment.value},
        success: function(data){
            console.log(data);
        }
    })


    name.value='';
    comment.value='';
    name.placeholder='Твоето Име';
    comment.placeholder='....';
}

function getNewsFeed() {

    let outputField = document.getElementById('news-widget-output');

    fetch('feedURL.php')
        .then(response => response.text())
        .then( (xml) => {
            let parser = new DOMParser();
            let doc = parser.parseFromString(xml, 'text/xml');

            let xmlItems = [doc.getElementsByTagName('item')[0], doc.getElementsByTagName('item')[1],
                doc.getElementsByTagName('item')[2], doc.getElementsByTagName('item')[4],
                doc.getElementsByTagName('item')[5]];

            for (let item of xmlItems) {

                let input = '<div class="news-widget-items">';

                let title = item.querySelector('title').textContent.split('\n')[0];
                let link = item.querySelector('link').textContent.split('\n')[0];
                let description = item.querySelector('description').textContent.split('\n')[0];
                let image = item.querySelector('thumbnail').getAttribute('url');

                input+='<img src="' + image + '"</img><a href="' + link + '" target=_blank><h4>' +
                    title + '</h4>' + description + '</a></dvi>';

                outputField.innerHTML+=input;
            }

        })
        .catch(error => console.log('Could not get URL', error));

}
