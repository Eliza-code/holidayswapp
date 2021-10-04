import * as types from "../types/userTypes.js";

const initialState =  {
    userInfo: [],
    
}

const userReducer = (state=initialState, action) => {
    switch (action.type){
     
        case types.POST_USER:
           return {
               ...state,
               userInfo: action.payload
           }
        case types.POST_SIGN_IN :
            return {
                ...state,
                
            }

        default: 
        return state;
    }
}
 
export default userReducer;