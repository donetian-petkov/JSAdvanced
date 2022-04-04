import {html , nothing} from "../../node_modules/lit-html/lit-html.js";
import * as petsService from '../services/petsService.js';
import {checkDonations} from "../services/petsService.js";

const detailsTemplate = (pet, user) => html`
    <section id="detailsPage">
        <div class="details">
            <div class="animalPic">
                <img src=${pet.image}>
            </div>
            <div>
                <div class="animalInfo">
                    <h1>Name: ${pet.name}</h1>
                    <h3>Breed: ${pet.breed}</h3>
                    <h4>Age: ${pet.age}</h4>
                    <h4>Weight: ${pet.weight}</h4>
                    <h4 class="donation">Donation: ${totalDonations(pet._id)*100}$</h4>
                </div>
                <!-- if there is no registered user, do not display div-->
                ${user
                    ? buttonDetails(user,pet)
                    : nothing}
                
            </div>
        </div>
    </section>
`;

const buttonDetails = (user, pet) => html`
    <div class="actionBtn">
        ${user._id === pet._ownerId
                ? html`<a href="/pets/${pet._id}/edit" class="edit">Edit</a>
                <a href="/pets/${pet._id}/delete" class="remove">Delete</a>`
                : donateButton(user._id, pet._ownerId, hasDonated(user._id,pet._ownerId))
        }
    </div>
`;

const donateButton = (userId, ownerId, hasDonated) => html`
    
    ${userId && userId != ownerId && !hasDonated
    ? html`<a href="/donate" className="donate">Donate</a>`
    : nothing
     }
`;

const hasDonated = (userId,petId) => {

    let donated = false;

    petsService.checkDonations(petId,userId)
        .then(res => {

            if (res === 0) {
                donated=false;
            } else if (res === 1) {
                donated=true;
            }
        });

    return donated;
}

const totalDonations = (petId) => {

    let count = 0;

    petsService.getDonations(petId).then(res => count=res);

    return count;

}

export const detailsView = (ctx) => {

    petsService.getOne(ctx.params.petId)
        .then(pet => {
            ctx.render(detailsTemplate(pet,ctx.user));
        });
}