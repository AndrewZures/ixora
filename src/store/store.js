import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import createLogger from 'redux-logger';

const rootReducer = combineReducers({
  routing: routerReducer,
});

const store = createStore(rootReducer, applyMiddleware(createLogger()));

export default store;
