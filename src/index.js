import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import firebase from 'firebase';
import store from './store/store';
import { Provider } from 'react-redux';

var config = {
    apiKey: "AIzaSyCH98wh4IVNvM__tQLfGmzs4gJaEKsPrhk",
    authDomain: "react-books-app-50875.firebaseapp.com",
    databaseURL: "https://react-books-app-50875.firebaseio.com",
    storageBucket: "react-books-app-50875.appspot.com",
  };

firebase.initializeApp(config);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
