import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import loggerMiddleware from './middlewares/logger';
import rootReducer from './rootReducer';
import rootSaga from './rootSagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(loggerMiddleware, sagaMiddleware))
);

export const makeStore = () => store;

sagaMiddleware.run(rootSaga);

export const wrapper = createWrapper(makeStore);
