const initialState =  {
    home: [],
    announcements: [{
        id: 1,
        Owner: "Silvio",
        City: "Roma",
        Country: "Italy",
        Rating: 5,
        Points: 300
    },
    {
        id: 2,
        Owner: "Maria",
        City: "Roma",
        Country: "Italy",
        Rating: 5,
        Points: 200
    },
    {
        id: 3,
        Owner: "Silvia",
        City: "Roma",
        Country: "Italy",
        Rating: 5,
        Points: 400
    },
    {
        id: 4,
        Owner: "Silvana",
        City: "Roma",
        Country: "Italy",
        Rating: 5,
        Points: 100
    },
    {
        id: 5,
        Owner: "Silvestre",
        City: "Roma",
        Country: "Italy",
        Rating: 5,
        Points: 400
    },
    {
        id: 6,
        Owner: "Sandro",
        City: "Roma",
        Country: "Italy",
        Rating: 5,
        Points: 300
    },
    {
        id: 7,
        Owner: "Sofia",
        City: "Roma",
        Country: "Italy",
        Rating: 5,
        Points: 300
    },
    {
        id: 8,
        Owner: "Sandro",
        City: "Roma",
        Country: "Italy",
        Rating: 5,
        Points: 400
    }]
}

const userReducer = (state=initialState, action) => {
    switch (action.type){
       case "GET_HOUSES":
           return {
               ...state,
               home: action.payload
           }
        case "ANNOUNCEMENTS":
            return {
                ...state,
                announcements: action.payload
            }
        
        default: 
        return state;
    }
}
 
export default userReducer;