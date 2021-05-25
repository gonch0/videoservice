export const SET_FILMS = "SET_FILMS";
export const SET_COMMENTS = "SET_COMMENTS";
export const SET_CHANNELS = "SET_CHANNELS";
export const SEARCH_FILMS = "SEARCH_FILMS";

export function setFilms(films) {
  return (dispatch) => {
    dispatch({
      type: SET_FILMS,
      payload: films,
    });
  };
}

export function setComments(comments) {
  return (dispatch) => {
    dispatch({
      type: SET_COMMENTS,
      payload: comments,
    });
  };
}

export function setChannels(channels) {
  return (dispatch) => {
    dispatch({
      type: SET_CHANNELS,
      payload: channels,
    });
  };
}

export function filmsSearch(result) {
  return (dispatch) => {
    dispatch({
      type: SEARCH_FILMS,
      payload: result,
    });
  };
}
