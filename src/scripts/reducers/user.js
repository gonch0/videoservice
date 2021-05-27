import { SET_USER } from "../actions/userActions";

const initialState = {
  name: "",
  pass: "",
  id: null,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        name: action.payload.name,
        pass: action.payload.pass,
        id: 4,
      };

    default:
      return state;
  }
}
