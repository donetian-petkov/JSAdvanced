import * as petsService from '../services/petsService.js';

export const deleteView = async (ctx) => {

    try {
        const confirmed = confirm('Do you want to delete the pet data?');

        if (confirmed) {

            await petsService.remove(ctx.params.petId);
            ctx.page.redirect('/');

        }

    } catch(err) {
        alert(err);
    }
}


