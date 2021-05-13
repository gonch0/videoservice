
export const SET_TAB = 'SET_TAB'

export function setTab(tabName) {
    return dispatch => {

        dispatch({
            type: SET_TAB,
            payload: tabName,
        })

    }
}
