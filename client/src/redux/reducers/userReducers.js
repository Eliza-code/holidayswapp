import * as types from "../types/userTypes.js";

const initialState =  {
   details:{},  
   ownerDetails: {},
   isAuth: !!window.localStorage.getItem("user"),
   ownerHouses: {},
}

const userReducer = (state = initialState, action) => {
    switch (action.type){
     
        case types.POST_USER:
           return {
               ...state,
            }

        case types.POST_SIGN_IN:
            return {
                ...state,
            }
        
        case types.SIGN_OUT_SUCCESS:
            return {
                ...state,
            }
        
        case types.SIGN_OUT_FAILED:
            return {
                ...state,
            }
        
        case types.USER_AUTH_SUCCESS:
            return {
                ...state,
                details: action.payload
            }
        
        case types.USER_AUTH_FAILED:
            return {
                ...state,
                details: {}
            }
        
        case types.USER_AUTH_REQUEST:
            return {
                ...state,
            }

        case types.GET_OWNER_ID:
            return {
                  ...state,
                  ownerDetails: action.payload,
            }
        case types.GET_HOUSES_BY_USER_ID:
            return {
                ...state,
                ownerHouses: action.payload,
            }

        default: 
        return state;
    }
}
 
export default userReducer;