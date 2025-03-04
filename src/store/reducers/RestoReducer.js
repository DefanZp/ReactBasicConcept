/*import { ADD_RESTO, DELETE_RESTO } from "../actions/restoListAction";

const initialState = {
    resto : [],
};

const restoReducer = (state = initialState, action ) => {
 switch (action.type) {
    case ADD_RESTO :
        return {
            ...state,
            resto : [...state.resto, action.payload.resto]
        };

    case DELETE_RESTO :
        return {
            ...state,
            resto : [...state.resto.filter((resto) => resto.id !== action.payload.id)]
        };   
    default :
      return state     
 }
}

export default restoReducer
*/
