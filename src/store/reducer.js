import {combineReducers} from 'redux'
import {reducer as HeaderReducers} from '../common/header/store'
const reducer = combineReducers({
    header: HeaderReducers
})
export default reducer
