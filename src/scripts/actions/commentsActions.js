export const SET_COMMENTS = "SET_COMMENTS";
export const ADD_COMMENT = "ADD_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export function setComments(comments) {
  return (dispatch) => {
    dispatch({
      type: SET_COMMENTS,
      payload: comments,
    });
  };
}

export function addComment(comment) {
  return (dispatch) => {
    dispatch({
      type: ADD_COMMENT,
      payload: comment,
    });
  };
}

export function removeComment(id) {
  return (dispatch) => {
    dispatch({
      type: REMOVE_COMMENT,
      payload: id,
    });
  };
}
