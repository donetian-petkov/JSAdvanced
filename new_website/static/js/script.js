import {html, render} from '../../node_modules/lit-html/lit-html.js';

const leftArrowButton = document.getElementById('slider-article-arrows-left');
const rightArrowButton = document.getElementById('slider-article-arrows-right');
const articlesSection = document.getElementById('game-news-articles');
const gamesPlayedArticle = document.getElementById('games-played-content');
let currentReview = 0;
fetchReview();
fetchArticles();
fetchGame();

leftArrowButton.addEventListener('click',fetchReview);
rightArrowButton.addEventListener('click',fetchReview);

async function fetchData(url){

    let formData = new FormData();
    formData.append('url', url);

    const response = await fetch('./feedURL.php', {
        method: 'post',
        body: formData
    });

    const result = await response.json();

    let objects = [...result.results.entries()].reduce((a,[k,v]) => Object.assign(a, {[k]: v}), {});

    return objects;

}

async function fetchReview(event) {

    const reviews = await fetchData('https://www.gamespot.com/api/reviews/?api_key=9120f24aef34abfcba8177ecc401255f88906501&format=json&sort=publish_date:desc&limit=15');
    ;

    if (currentReview === 0 && event != undefined && event.target.id==='slider-article-arrows-right') {
        createReviewHTML(reviews[1]);
        currentReview++;
        return;
    } else if (currentReview === 0) {
        createReviewHTML(reviews[0]);
        return;
    }

    if (currentReview === 14 && event != undefined && event.target.id==='slider-article-arrows-left') {
        createReviewHTML(reviews[13]);
        currentReview--;
        return;
    } else if (currentReview === 14) {
        createReviewHTML(reviews[14]);
        return;
    }


    if (event.target.id === 'slider-article-arrows-left')
    {
        currentReview--;
    } else if (event.target.id === 'slider-article-arrows-right'){
        currentReview++;
    }

    createReviewHTML(reviews[currentReview]);



}

function createReviewHTML(review) {

    const reviewHTML = html`
        <img class="slider-article-image" src=${review.image.original}>
        <h3>${review.title}</h3>
        <hr>
        <p>Score: ${review.score}</p>    
        <p>Published Date: ${review.publish_date}</p>
        <a href=${review.site_detail_url} target="_blank">Link to the Review</a>
        <p>${review.deck}</p>`;

    const root = document.querySelector('.slider-article-content');

    render(reviewHTML,root);

}

async function fetchArticles() {
    const articlesData = await fetchData('https://www.gamespot.com/api/articles/?api_key=9120f24aef34abfcba8177ecc401255f88906501&format=json&sort=publish_date:desc&limit=6');

    const articles = [];

    for (let i = 0; i < 6 ; i++){
        articles.push(articlesData[i]);
    }

    articles.forEach(article => createArticle(article));

}

function createArticle(article){

    let articleHTML = document.createElement('article');
    articleHTML.className='game-news-single-article';

    let img = document.createElement('img');
    img.src = article.image.original;
    articleHTML.appendChild(img);

    let title = document.createElement('h3');
    title.textContent = article.title;
    articleHTML.appendChild(title);

    let publishDate = document.createElement('p');
    publishDate.textContent = `Publish Date: ${article.publish_date}`;
    articleHTML.appendChild(publishDate);

    let author = document.createElement('p');
    author.textContent = `Author/s: ${article.authors}`;
    articleHTML.appendChild(author);

    let linkToArticle = document.createElement('a');
    linkToArticle.href=article.site_detail_url;
    linkToArticle.textContent="Link to the article";
    linkToArticle.target='_blank';
    articleHTML.appendChild(linkToArticle);

    let description = document.createElement('p');
    description.textContent = article.deck;
    articleHTML.appendChild(description);

    articlesSection.appendChild(articleHTML);

}

async function fetchGame(){

    const url='https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=00174C01443D8CE27FFE40D187A30376&steamid=76561198097591600&format=json&include_appinfo=true';

    let formData = new FormData();
    formData.append('url', url);

    const response = await fetch('./feedURL.php', {
        method: 'post',
        body: formData
    });

    const result = await response.json();

    let games = Object.values(result)[0].games;

    games.sort((a,b) => b.playtime_forever - a.playtime_forever);

    games = games.slice(0,12);

    console.log(games);

    games.forEach(game => createGameHTML(game));

}

function createGameHTML(game) {

    let hoursPlayed = (Number(game.playtime_forever)/60).toFixed(0);

    let a = document.createElement('a');
    a.href=`https://store.steampowered.com/app/${game.appid}`;
    a.target='_blank';
    a.style.textDecoration='none';
    a.style.color='black';
    a.className='games-played-games';

    let img = document.createElement('img');
    img.src=`https://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_logo_url}.jpg`;
    a.appendChild(img);

    let title = document.createElement('h4');
    title.textContent=game.name;
    a.appendChild(title);

    let timePlayed = document.createElement('p');
    timePlayed.textContent = `Time Played: ${hoursPlayed}`;
    a.appendChild(timePlayed);

    gamesPlayedArticle.appendChild(a);

}





