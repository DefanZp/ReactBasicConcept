import { Fetch_success, Fetch_error, Change } from "../actions/dataAction";

export const initialState = {
    data : [],
    loading : true,
    currentIndex : (0), 
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case Fetch_success :
            return {
                ...state,
                data : action.payload,
                loading : false,
            };
       
        case Fetch_error : 
            return {
                ...state,
                loading : false,
                error : action.payload,
            };    

        case Change : 
            return {
                ...state,
                currentIndex : action.payload,
            };
            
        default :
        throw new Error(`Unhandled action type :${action.type}`)    
    }
}

export default dataReducer
