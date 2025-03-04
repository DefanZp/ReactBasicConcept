import { useSelector } from "react-redux";

const useThemeSelector = () =>
    useSelector((state) => state.theme.theme)

export default useThemeSelector