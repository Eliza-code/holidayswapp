import * as types from "../types/userTypes.js";

const initialState =  {
    userInfo: window.localStorage.getItem("user") ? JSON.parse(window.localStorage.getItem("user")) : null,
}

const userReducer = (state=initialState, action) => {
    switch (action.type){
     
        case types.POST_USER:
           return {
               ...state,
            }

        case types.POST_SIGN_IN:
            return {
                ...state,
            }
        
        case types.SIGN_OUT:
            return {
                ...state,
            }

        default: 
        return state;
    }
}
 
export default userReducer;