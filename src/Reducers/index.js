import { combineReducers } from 'redux'
import pageLayout from './pageLayoutReducer'
import pagePostion from './pagePositionReducer'

const reducer = combineReducers({
    pageLayout,
    pagePostion
})

export default reducer