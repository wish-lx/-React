import {combineReducers} from 'redux-immutable'
import {reducer as HeaderReducers} from '../common/header/store'
import {reducer as HomeReducers} from '../pages/home/store'
import {reducer as DetailReducers} from '../pages/detail/store'
import {reducer as LoginReducers} from '../pages/login/store'
const reducer = combineReducers({
    header: HeaderReducers,
    home: HomeReducers,
    detail: DetailReducers,
    login: LoginReducers
})
export default reducer
