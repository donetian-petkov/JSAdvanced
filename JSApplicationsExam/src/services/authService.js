import * as request from './requester.js';
import * as userService from './userService.js';

const baseURL = 'http://localhost:3030/users';


export const login = (email, password) => {

    return request.post(`${baseURL}/login`, {email, password})
        .then(user => {
            userService.saveUser(user);

            return user;
        })
}

export const register = (email, password) => {

    return request.post(`${baseURL}/register`, {email, password})
        .then(user => {
            userService.saveUser(user);

            return user;
        })
}

export const logout = () => fetch(`${baseURL}/logout`, { headers: {'X-Authorization': userService.getToken()} })
    .then(() => {
        userService.deleteUser();
    });



