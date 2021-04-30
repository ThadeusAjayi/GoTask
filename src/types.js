import axios from 'axios';
export const LOADING = "LOADING";
export const DATA = "DATA";
export const MORE_DATA = "MORE_DATA";
export const POSTER_PATH = "https://image.tmdb.org/t/p/w500";

const BEARER_TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDdlN2M3YzQ0Mjg0ZDEzMmJlMWQ3ZDYxOGQ0Njg3ZSIsInN1YiI6IjU4ZTM4ZDY1OTI1MTQxMjgxMDAxZGMzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m_VYC8m5H2_XIcIIHuNCf6RHTpybdcR7Ha8GFRE-pnw";
const BASE_URL = "https://api.themoviedb.org/3";

export default () => {
    axios.defaults.headers['Authorization'] = BEARER_TOKEN;
    axios.defaults.baseURL = BASE_URL;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
};