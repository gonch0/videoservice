export const SET_USER = "SET_USER";

export function setUserName(name) {
  return (dispatch) => {
    // экшен с типом REQUEST (запрос начался)
    // диспатчится сразу, как будто-бы перед реальным запросом
    dispatch({
      type: SET_USER,
      payload: name,
    });
  };
}
