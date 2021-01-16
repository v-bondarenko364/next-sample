import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import loggerMiddleware from './middlewares/logger';
import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(loggerMiddleware))
);

export const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
