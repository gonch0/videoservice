import { combineReducers } from 'redux'
import { pageReducer } from './page'
import { userReducer } from './user'
import { tabReducer } from './tab'

export const rootReducer = combineReducers({
    page: pageReducer,
    user: userReducer,
    tabs: tabReducer,
})
