import { Map } from 'immutable';

import { LOGIN } from '../actions/authActions';

const counterReducer = (
  state = Map({ loggedIn: false }),
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case LOGIN:
      return state.set('loggedIn', true);
    default:
      return state;
  }
};

export default counterReducer;
