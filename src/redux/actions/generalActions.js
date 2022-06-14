import {ActionTypes} from '../contants/action-types';



export const setEployees = (details)=>{
    return {
        type: ActionTypes.SET_EMPLOYEES,
        payload: details
    }
}