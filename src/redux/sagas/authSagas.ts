import { all, takeLatest } from 'redux-saga/effects';

import { LOGIN } from '../actions/authActions';

function* loginSaga() {
  yield console.log('Login');
}

function* authSagas() {
  yield all([takeLatest(LOGIN, loginSaga)]);
}

export default authSagas;
