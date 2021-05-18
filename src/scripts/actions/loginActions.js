export const SET_LOGIN = "SET_LOGIN";

export function setLogin(isLoggedIn) {
  return (dispatch) => {

    dispatch({
      type: SET_LOGIN,
      payload: isLoggedIn,
    });
  };
}
