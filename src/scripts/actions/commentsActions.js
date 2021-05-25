export const SET_COMMENTS = "SET_COMMENTS";

export function setComments(comments) {
  return (dispatch) => {
    dispatch({
      type: SET_COMMENTS,
      payload: comments,
    });
  };
}
