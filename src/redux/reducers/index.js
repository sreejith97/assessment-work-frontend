import {combineReducers} from 'redux';
import {setEmployeesReducers } from './generalReducers';

const reducers = combineReducers({
    setEmployeesReducers:setEmployeesReducers
})

export default reducers;