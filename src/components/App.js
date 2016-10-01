import React, { Component } from 'react';
import store from 'store/store.js';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

// components
import ContentContainer from 'components/ContentContainer';
import AboutContainer from 'components/about/AboutContainer';
import Play from 'components/play/Play';
import D3 from 'components/play/d3/D3';
import BasicGraphWrapped from 'components/play/d3/graphs/basic/BasicGraphWrapped';
import ThreeCircles from 'components/play/d3/graphs/three_circles/ThreeCircles';

const history = syncHistoryWithStore(browserHistory, store);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={ContentContainer}>
            <Route path="about" component={AboutContainer} />
            <Route path="play" component={Play}>
              <Route path="d3" component={D3}>
                <Route path="bar_chart" component={BasicGraphWrapped} />
                <Route path="three_circles" component={ThreeCircles} />
              </Route>
            </Route>
          </Route>
        </Router>
      </Provider>
    );
  }
}
