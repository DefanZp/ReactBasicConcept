import { createSlice } from "@reduxjs/toolkit";

const initialState= { resto : []};
const restoSlice = createSlice({
    name : "resto",
    initialState : initialState,
    reducers : {
        addResto : (state, action) => {
            return {
                ...state,
                resto : action.payload
            }
        },

        update : (state, action) => {
            return {
                ...state,
                resto : action.payload
            }
        }
    }
})

const {actions : restoAction, reducer : restoReducer} = restoSlice;

export{restoAction, restoReducer};
export default restoSlice;
