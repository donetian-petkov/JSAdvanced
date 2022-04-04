import page from '../node_modules/page/page.mjs'
import {renderMainMiddleware, renderNavMenuMiddleware} from "./middleware/renderMiddleware.js";
import {homeView} from "./views/homeView.js";
import {loginView} from "./views/loginView.js";
import {authMiddleware} from "./middleware/authMiddleware.js";
import {registerView} from './views/registerView.js'
import {logoutView} from "./views/logoutView.js";
import {dashboardView} from "./views/dashboardView.js";
import {createView} from "./views/createView.js";
import {detailsView} from "./views/detailsView.js";
import {editView} from "./views/editView.js";
import {deleteView} from './views/deleteView.js';
import {donateView} from "./views/donateView.js";

page(authMiddleware);
page(renderNavMenuMiddleware);
page(renderMainMiddleware);


page('/', homeView);
page('/dashboard', dashboardView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/create', createView);
page('/edit', editView);
page('/delete', deleteView);
page('/pets/:petId', detailsView);
page('/pets/:petId/edit', editView);
page('/pets/:petId/delete', deleteView);
page('/donate', donateView);

page.start();