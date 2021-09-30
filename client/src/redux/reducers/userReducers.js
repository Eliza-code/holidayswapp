import Houses from '../../components/City Reservation/Stock Houses Photos/Houses';

const initialState =  {
    home: [],
    announcements: [{
        id: 1,
        Owner: "Silvio",
        Image: Houses.img1,
        City: "Roma",
        Country: "Italy",
        Rating: 5,
        Points: 300
    },
    {
        id: 2,
        Owner: "Maria",
        Image: Houses.img2,
        City: "Roma",
        Country: "Italy",
        Rating: 5,
        Points: 200
    },
    {
        id: 3,
        Owner: "Silvia",
        Image: Houses.img3,
        City: "Roma",
        Country: "Italy",
        Rating: 5,
        Points: 400
    },
    {
        id: 4,
        Owner: "Silvana",
        Image: Houses.img4,
        City: "Roma",
        Country: "Italy",
        Rating: 5,
        Points: 100
    },
    {
        id: 5,
        Owner: "Silvestre",
        Image: Houses.img5,
        City: "Roma",
        Country: "Italy",
        Rating: 5,
        Points: 400
    },
    {
        id: 6,
        Owner: "Sandro",
        Image: Houses.img6,
        City: "Roma",
        Country: "Italy",
        Rating: 5,
        Points: 300
    },
    {
        id: 7,
        Owner: "Sofia",
        Image: Houses.img7,
        City: "Roma",
        Country: "Italy",
        Rating: 5,
        Points: 300
    },
    {
        id: 8,
        Owner: "Sandro",
        Image: Houses.img8,
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