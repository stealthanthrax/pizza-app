import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pizza-app-backend.herokuapp.com/'
});

export default instance;