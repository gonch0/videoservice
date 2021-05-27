import { SET_LOGIN } from "../actions/loginActions";

const initialState = {
  isLoggedIn: false,
};

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN:
      return { ...state, isLoggedIn: action.payload };

    default:
      return state;
  }
}
