import {getUser} from "../services/userService.js";

export const authMiddleware = (ctx, next) => {

    ctx.user = getUser();

    next();

}