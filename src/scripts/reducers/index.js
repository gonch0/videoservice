import { combineReducers } from 'redux'
import { pageReducer } from './page'
import { userReducer } from './user'
import { filmsReducer, channelsReducer } from './films'
import { loginReducer } from './login'

export const rootReducer = combineReducers({
    page: pageReducer,
    user: userReducer,
    login: loginReducer,
    films: filmsReducer,
    channels: channelsReducer,
})
