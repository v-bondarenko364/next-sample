import { LOGIN } from '../actions/authActions';

const counterReducer = (
  state = { loggedIn: false },
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, loggedIn: true };
    default:
      return { ...state };
  }
};

export default counterReducer;
