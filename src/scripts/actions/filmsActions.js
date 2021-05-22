export const SET_FILMS = "SET_FILMS";
export const SET_CHANNELS = "SET_CHANNELS";

export function setFilms(films) {
  return (dispatch) => {
    dispatch({
      type: SET_FILMS,
      payload: films,
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
