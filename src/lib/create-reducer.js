import {combineReducers} from 'redux';
import meaureStateReducer from '../reducers/measure';

export default () => combineReducers({
    measure: meaureStateReducer()
});
