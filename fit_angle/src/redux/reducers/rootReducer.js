import { combineReducers } from 'redux';
import UserSlice from '../user/UserSlice';

const rootReducer = combineReducers({
    user: UserSlice,
})

export default rootReducer;