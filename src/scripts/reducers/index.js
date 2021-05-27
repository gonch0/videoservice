import { combineReducers } from "redux";
import { userReducer } from "./user";
import { filmsReducer, channelsReducer } from "./films";
import { commentsReducer } from "./comments";
import { loginReducer } from "./login";

export const rootReducer = combineReducers({
  user: userReducer,
  login: loginReducer,
  films: filmsReducer,
  channels: channelsReducer,
  comments: commentsReducer,
});
