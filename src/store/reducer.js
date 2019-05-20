import {combineReducers} from 'redux'
import HeaderReducers from '../../src/common/header/store/reducer'
const reducer = combineReducers({
    header: HeaderReducers
})
export default reducer
