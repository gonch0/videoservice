import {
  SET_CHANNELS,
  SET_FILMS,
  SEARCH_FILMS,
  SET_COMMENTS,
} from "../actions/filmsActions";

const initialState = {};

export function filmsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILMS:
      return { ...state, results: action.payload, items: action.payload };

    case SEARCH_FILMS:
      return {
        ...state,
        results: state.items.filter((item) => {
          const title = item.title.toLowerCase();
          const query = action.payload.toLowerCase();

          return title.includes(query);
        }),
      };

    default:
      return state;
  }
}

export function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_COMMENTS:
      return { ...state, comments: action.payload };

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
