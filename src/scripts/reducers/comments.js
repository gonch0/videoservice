import { ADD_COMMENT, SET_COMMENTS } from "../actions/commentsActions";

const initialState = {};

export function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_COMMENTS:
      return { ...state, items: action.payload };

    case ADD_COMMENT:
      return { ...state, items: [{ ...action.payload }, ...state.items] };
    default:
      return state;
  }
}
