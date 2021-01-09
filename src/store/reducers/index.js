import { combineReducers } from 'redux';
import catsReducer from './CatsReducer';

export default combineReducers({
    cats: catsReducer
});
