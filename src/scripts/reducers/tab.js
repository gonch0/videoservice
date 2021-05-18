import { SET_TAB } from '../actions/tabActions'


const initialState = {
  currentTab: "films",
};

export function tabReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TAB:
      return { ...state, currentTab: action.payload};

    default:
      return state;
  }
}
