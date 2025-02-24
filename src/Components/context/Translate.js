import { createContext } from "react";

const TranslateTextContext = createContext({
    isIndonesia: true,
    setIsIndonesia: () => {},
});
export default TranslateTextContext;