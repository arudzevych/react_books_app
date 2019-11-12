import axios from 'axios';

export const getBooksAction = () => {
    return function(dispatch) {
    axios.get('https://react-books-app-50875.firebaseio.com/books.json')
        .then(res => {
            dispatch({type: "GET_BOOKS_SUCCESS", payload: res.data})
        })
        .catch(err => dispatch({type: 'GET_BOOKS_ERROR', payload: err}))
    }
}


