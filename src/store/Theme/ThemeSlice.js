import { createSlice } from "@reduxjs/toolkit";

const initialState = { theme : localStorage.getItem("theme")}

const themeSlice = createSlice ({
    name : "theme",
    initialState : initialState,
    reducers : {
        toggleTheme : (state, action) => {
            const newTheme = state.theme === "light" ? "dark" : "light";
            document.documentElement.classList.toggle("dark", newTheme === "dark");
            localStorage.setItem("theme", newTheme);
            return {
                ...state, 
                theme : newTheme
            }
        }
    }
})

const {actions : themeAction, reducer : themeReducer} = themeSlice;

export {themeAction, themeReducer};
export default themeSlice