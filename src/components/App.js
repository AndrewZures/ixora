import React, { Component } from 'react';
import store from '../store/store.js';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

// components
import Navbar from './navbar/Navbar';
import About from './about/About';
import Play from './play/Play';
import D3 from './play/d3/D3';

const history = syncHistoryWithStore(browserHistory, store);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Navbar}>
            <Route path="about" component={About} />
            <Route path="play" component={Play}>
              <Route path="d3" component={D3} />
            </Route>
          </Route>
        </Router>
      </Provider>
    );
  }
}
