// add counter action creators imports here
import { INCREASE_COUNT,DECREASE_COUNT,RESET_COUNT } from "../actions/counterActions";
const INITIAL_STATE = { count: 0 };

// define counter reducer function here
export const counterReducer = (state = INITIAL_STATE,action) =>{
    switch(action.type){
        case INCREASE_COUNT:
            return{
                ...state,
                count:action.count + 1
            }
        case DECREASE_COUNT:
            if(action.count <=0){
                return;
            }
            return{
                ...state,
                
                count:action.count - 1
            }
        case RESET_COUNT:
            return{
                ...state,
                count : 0
            }
        default:
            return state;
    }
};
