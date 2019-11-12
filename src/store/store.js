import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import getBooksReducer from './reducers/getBooksReducer';
import getAuthorsReducer from './reducers/getAuthorsReducer';

const reducers = combineReducers({
    books: getBooksReducer,
    authors: getAuthorsReducer
});

const middleware = applyMiddleware(logger, promise, thunk);

const store = createStore(reducers, middleware);

// store.subscribe(() => {console.log('action fired', store.getState())});

// store.dispatch({type: "GET_AUTHORS"});
// store.dispatch({type: "GET_BOOKS"});

export default store;