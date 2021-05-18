import { combineReducers } from 'redux'
import { pageReducer } from './page'
import { userReducer } from './user'
import { tabReducer } from './tab'
import { loginReducer } from './login'

export const rootReducer = combineReducers({
    page: pageReducer,
    user: userReducer,
    tabs: tabReducer,
    login: loginReducer,
})
