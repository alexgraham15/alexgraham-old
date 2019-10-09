import { combineReducers } from 'redux'
import pageLayout from './pageLayoutReducer'
import pagePosition from './pagePositionReducer'
import menuLayout from './menuLayout'

const reducer = combineReducers({
    pageLayout,
    pagePosition,
    menuLayout
})

export default reducer