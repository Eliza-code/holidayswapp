import * as types from "../types/userTypes.js";

const initialState =  {
    home: [],
    homeInfo: [],
    userInfo:[],
}

const userReducer = (state=initialState, action) => {
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