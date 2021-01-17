import axios from 'axios';
import http from '../service/http-common'

 const API_URL = 'http://localhost:1234/';

 const getById = (id) => {
    return axios.get(API_URL+ id);
};

 const postTrue = (id, data) => {
    return http.put(`${id}/update`, data);
 };

 const getAll = (api_fix)=> {
     return http.get(`${api_fix}/get`);};
export default {
    getById,
    postTrue,
    getAll
};