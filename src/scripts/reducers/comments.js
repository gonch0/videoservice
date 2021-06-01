import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  SET_COMMENTS,
} from "../actions/commentsActions";

const initialState = {};

import { useStorage } from "../customHooks/useStorage";
const { setDataToStorage, removeDataFromStorage } = useStorage();

export function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_COMMENTS:
      return { ...state, items: action.payload };

    case ADD_COMMENT:
      setDataToStorage("comments", [{ ...action.payload }, ...state.items]);
      return { ...state, items: [{ ...action.payload }, ...state.items] };

    case REMOVE_COMMENT:
      const idx = state.items.findIndex(({ id }) => {
        return JSON.stringify(id) === action.payload;
      });

      setDataToStorage("comments", [
        ...state.items.slice(0, idx),
        ...state.items.slice(idx + 1),
      ]);

      return {
        ...state,
        items: [...state.items.slice(0, idx), ...state.items.slice(idx + 1)],
      };
    default:
      return state;
  }
}
