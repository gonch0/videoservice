export const GET_FILMS = "GET_FILMS";


export function getFilms(films) {
  return (dispatch) => {
    dispatch({
      type: GET_FILMS,
      payload: films,
    });
  };
}


