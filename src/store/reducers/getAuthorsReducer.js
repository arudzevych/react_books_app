const getAuthorsReducer = (state={
    fetching: false,
    fetched: false,
    authors: {},
    error: null
}, action) => {
    switch (action.type) {
        case "GET_AUTHORS_SUCCESS":
            return {...state, authors: action.payload, fetched: true}
        case "GET_AUTHORS_ERROR": 
            return {...state, error: action.payload}
        default: return state;
    }
}

export default getAuthorsReducer;