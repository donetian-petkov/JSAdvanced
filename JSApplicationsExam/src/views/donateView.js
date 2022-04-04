import * as petsService from '../services/petsService.js';

export const donateView = async (ctx) => {

    try {

            console.log(ctx);
            console.log(ctx.params);

            await petsService.donate(ctx.params.petId);

            ctx.page.redirect(`/pets/${ctx.params.petId}`);

    } catch(err) {
        alert(err);
    }
}


