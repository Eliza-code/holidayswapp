import * as types from "../types/userTypes";
const initialState =  {}

const postReducer = (state=initialState, action) => {
    switch (action.type){
        case types.GET_HOUSES:
            return {
                ...state,
                home: action.payload
            }
         case types.GET_HOUSES_ID:
             return {
                 ...state,
                 homeInfo: action.payload
             }
        
        default: 
        return state;
    }
}
 
export default postReducer;