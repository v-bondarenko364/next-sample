import { all, fork } from 'redux-saga/effects';

import authSagas from './sagas/authSagas';

function* rootSaga() {
  yield all([fork(authSagas)]);
}

export default rootSaga;
