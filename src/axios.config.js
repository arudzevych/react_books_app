import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-books-app-50875.firebaseio.com',
    timeout: 10000,
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
    }
});