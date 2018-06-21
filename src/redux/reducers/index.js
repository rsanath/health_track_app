import { combineReducers } from 'redux';
import HomeReducer from './home_screen';

export default combineReducers({
    home: HomeReducer
})