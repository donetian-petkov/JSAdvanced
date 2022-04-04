import * as userService from './userService.js';

const request = (method, url, data) => {

    let options = {}


    if (method != 'GET') {


        if(userService.getUser())
        {
            options.headers = {
                'X-Authorization': userService.getToken(),
                'content-type': 'application/json'
            }
        } else {
            options.headers = {
                'content-type': 'application/json'
            }
        }

        options.method = method;

        options.body = JSON.stringify(data);
    }

    return fetch(url, options).then(res => res.json());

}

export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const put = request.bind({}, 'PUT');
export const patch = request.bind({}, 'PATCH');
export const del = request.bind({}, 'DELETE');
