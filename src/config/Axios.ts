import axios from 'axios';
import { environment } from './Enviroment';

export const Axios = axios.create({
    baseURL: environment.apiUrl,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});
