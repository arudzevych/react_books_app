const getBooksReducer = (state={
    books: {},
    fetching: false,
    fetched: false,
    error: null
}, action) => {
    switch (action.type) {
        case "GET_BOOKS_FETCH":
            return {...state, fetching: true};
        case 'GET_BOOKS_SUCCESS':
            return {...state, fetched: true, books: action.payload}
        case 'GET_BOOKS_ERROR':
            return {...state, error: action.payload}
        default: return state;
    }
}

export default getBooksReducer;