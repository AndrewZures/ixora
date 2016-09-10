import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import createLogger from 'redux-logger';
import initialData from 'store/initialData';

// reducers
import graphs from 'store/reducers/graphs';

const rootReducer = combineReducers({
  routing: routerReducer,
  graphs,
});

const store = createStore(rootReducer, initialData, applyMiddleware(createLogger()));

export default store;
