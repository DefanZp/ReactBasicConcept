import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import { successAddRestoMiddleware } from "./middleware/restoMiddleware";

const store = configureStore({
    reducer : rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(successAddRestoMiddleware)
});

export default store;
