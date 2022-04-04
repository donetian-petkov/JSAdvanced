import * as request from './requester.js';

const baseURL = 'http://localhost:3030/data/pets';

export const getAll = () => request.get(`${baseURL}?sortBy=_createdOn%20desc&distinct=name`);

export const getOne = (id) => request.get(`${baseURL}/${id}`);

export const create = (petData) => request.post(`${baseURL}`, petData);

export const edit = (petId, petData) => request.put(`${baseURL}/${petId}`,petData);

export const remove = (petId) => request.del(`${baseURL}/${petId}`);

export const donate = (petId) => request.post('http://localhost:3030/data/donation', {"petId":petId});

export const getDonations = (petId) => {

    const query = encodeURIComponent(`petId="${petId}"`);

    return request.get(`${baseURL}?where=${query}&distinct=_ownerId&count`);

}

export const checkDonations = (petId, userId) => {

    const query = encodeURIComponent(`petId="${petId}" and _ownerId="${userId}"`);

    return request.get(`${baseURL}?where=${query}&count`);

}