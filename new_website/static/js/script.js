import {html, render} from '../../node_modules/lit-html/lit-html.js';

const leftArrowButton = document.getElementById('slider-article-arrows-left');
const rightArrowButton = document.getElementById('slider-article-arrows-right');
let currentReview = 0;
fetchReview();

leftArrowButton.addEventListener('click',fetchReview);
rightArrowButton.addEventListener('click',fetchReview);

async function fetchReviewsData(){
    const response = await fetch('feedURL.php');
    const result = await response.json();

    let reviews = [...result.results.entries()].reduce((a,[k,v]) => Object.assign(a, {[k]: v}), {});

    return reviews;
}

async function fetchReview(event) {

    const reviews = await fetchReviewsData();

    if (currentReview <= 0) {
        createReviewHTML(reviews[0]);
        console.log("initial");
        currentReview++;
        return;
    }

    createReviewHTML(reviews[currentReview]);

    if (event.target.id === 'slider-article-arrows-left')
    {
        currentReview--;
    } else if (event.target.id === 'slider-article-arrows-right'){
        currentReview++;
    }


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



