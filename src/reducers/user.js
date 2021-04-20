import { IS_LOGGED_IN } from '../actions/user';

const initialState = {
  isLoggedIn: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case IS_LOGGED_IN:
      return { ...state, isLoggedIn: action.isLoggedIn };

    default:
      return state;
  }
}