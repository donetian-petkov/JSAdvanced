import { render } from '../../node_modules/lit-html/lit-html.js';
import { navigationView } from "../views/navigationView.js";

const headerElement = document.querySelector('#navMenu');
const mainElement = document.querySelector('#content')

const renderContent = (templateResult) => {

    render(templateResult, mainElement);

}

export const renderNavMenuMiddleware = (ctx, next) => {

    render(navigationView(ctx), headerElement);

    next();

};

export const renderMainMiddleware = (ctx, next) => {

    ctx.render = renderContent;

    next();

}