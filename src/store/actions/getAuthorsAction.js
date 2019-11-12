import axios from 'axios';

export const getAuthorsAction = () => {
    return function(dispatch) {
        axios.get('https://react-books-app-50875.firebaseio.com/authors.json')
        .then(res => dispatch({type: 'GET_AUTHORS_SUCCESS', payload: res.data}))
        .catch(err => dispatch({type: 'GET_AUTHORS_ERROR', error: err}))
    }
}
