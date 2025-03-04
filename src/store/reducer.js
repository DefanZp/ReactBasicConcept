import { combineReducers} from "@reduxjs/toolkit";
import { restoReducer } from "./RestoList/RestoListSlice";
import { themeReducer } from "./Theme/ThemeSlice";

const rootReducer = combineReducers({
  resto: restoReducer,
  theme: themeReducer,
});

export default rootReducer;
