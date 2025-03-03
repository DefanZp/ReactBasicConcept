import { combineReducers } from "redux";
import restoReducer from "./RestoReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers ({
    resto : restoReducer,
    theme : themeReducer
});

export default rootReducer