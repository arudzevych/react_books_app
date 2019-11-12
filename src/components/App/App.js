import React from 'react';
import './App.scss';
import Homepage from '../Homepage';
import Book from '../Book';
import Author from '../Author';
import Categories from '../Categories';
import NotFound from '../NotFound';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

class App extends React.Component {

  render() {
    const history = createBrowserHistory();
    return (
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path="/book/:bookId" component={Book} />
            <Route exact path="/author/:authorId" component={Author} />
            <Route exact path="/categories/:categoryId" component={Categories} />
            <Route path="" component={NotFound} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
