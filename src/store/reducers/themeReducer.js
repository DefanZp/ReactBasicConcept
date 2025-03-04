import { TOGGLE_THEME } from "../actions/themeAction";

export const initialState = {
    theme: localStorage.getItem("theme"),
}
const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_THEME :
            const newTheme = state.theme === "light" ? "dark" : "light";
            document.documentElement.classList.toggle("dark", newTheme === "dark");
            localStorage.setItem("theme", newTheme);
            return {
                ...state, 
                theme : newTheme
            }
        default :
        return state    
    }
}

export default themeReducer
