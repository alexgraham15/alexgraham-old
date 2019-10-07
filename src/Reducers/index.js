import { combineReducers } from 'redux'
import pageLayout from './pageLayoutReducer'
import pagePosition from './pagePositionReducer'

const reducer = combineReducers({
    pageLayout,
    pagePosition
})

export default reducer