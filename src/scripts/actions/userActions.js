export const SET_USER = "SET_USER";

export function setUser(loginData) {
  return (dispatch) => {
    dispatch({
      type: SET_USER,
      payload: loginData,
    });
  };
}
