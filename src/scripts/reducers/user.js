import { SET_USER } from '../actions/userActions'


const initialState = {
  name: "",
  pass: "",
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
      case SET_USER:
      return { ...state, name: action.payload.name, pass: action.payload.pass };

    default:
      return state;
  }
}
