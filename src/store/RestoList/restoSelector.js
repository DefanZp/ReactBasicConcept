import { useSelector } from "react-redux";

export const useRestoListSelector = () => 
    useSelector ((state) => state.resto.resto)