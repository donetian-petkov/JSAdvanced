import {html, nothing} from "../../node_modules/lit-html/lit-html.js";
import * as petsService from "../services/petsService.js";


const petDetails = (id) => html`
    <div class="action">
        <a class="btn" href='/pets/${id}' id="details">Details</a>
    </div>
`;

const petTemplate = (pet, withDetails = true) => html`
        <div class="animals-board">
            <article class="service-img">
                <img class="animal-image-cover" src=${pet.image}>
            </article>
            <h2 class="name">${pet.name}</h2>
            <h3 class="breed">${pet.breed}</h3>
            ${withDetails 
                    ? petDetails(pet._id)
                    : nothing}
            
        </div>
`;

const dashboardTemplate = (user, pets) => html`
    <section id="dashboard">
        <h2 class="dashboard-title">Services for every animal</h2>
        <div class="animals-dashboard">

        ${pets.map(x => petTemplate(x, Boolean(user)))}

            <!--If there is no pets in dashboard-->
            <div>
                ${pets.length == 0
                        ? html`<p class="no-pets">No pets in dashboard</p>`
                        : nothing}
            </div>
        </div>
    </section>
`;

export const dashboardView = (ctx) => {

    petsService.getAll()
        .then(pets => {

            ctx.render(dashboardTemplate(ctx.user, pets));

        });

}
