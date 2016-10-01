import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import initialData from 'store/initialData';
import rootSaga from 'sagas/rootSaga';

// reducers
import graphs from 'store/reducers/graphs';
import counter from 'store/reducers/counter';

const rootReducer = combineReducers({
  routing: routerReducer,
  counter,
  graphs,
});

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, logger];
const store = createStore(rootReducer, initialData, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export default store;
