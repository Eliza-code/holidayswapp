import * as types from "../types/userTypes";

const initialState =  {
    userInfo:[],
    home: []
}

const userReducer = (state=initialState, action) => {
    switch (action.type){
       case types.GET_HOUSES:
           return {
               ...state,
               home: action.payload
           }
        case types.POST_USER:
           return {
               ...state,
               userInfo: action.payload
           }

        default: 
        return state;
    }
}
 
export default userReducer;