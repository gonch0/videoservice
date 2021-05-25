import {
  SET_COMMENTS,
} from "../actions/commentsActions";

const initialState = {};


export function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_COMMENTS:
      return { ...state, comments: action.payload };

    default:
      return state;
  }
}

