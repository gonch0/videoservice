import { SET_CHANNELS, SET_FILMS } from "../actions/filmsActions";

const initialState = {};

export function filmsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILMS:
      return { ...state, items: action.payload };

    default:
      return state;
  }
}

export function channelsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CHANNELS:
        return { ...state, items: action.payload };

    default:
      return state;
  }
}
