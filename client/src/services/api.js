import axios from 'axios';

const api = axios.create({
  baseURL: "http://acervusej.herokuapp.com/api/"
});

export default api;