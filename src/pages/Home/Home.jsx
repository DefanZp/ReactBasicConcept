import React, { useEffect, useReducer, useContext } from "react";
import axios from "axios";
import HomeView from "./HomeView";
import TranslateTextContext from "../../Components/context/Translate";
import dataReducer, { initialState } from "../../store/reducers/dataReducer";
import {
  fetch_Success,
  fetch_Error,
  change_Index,
} from "../../store/actions/dataAction";
import { useSelector, useDispatch } from "react-redux";
import useThemeSelector from "../../store/Theme/themeSelector";
import { themeAction } from "../../store/Theme/ThemeSlice";

const Home = () => {
  const rDispatch = useDispatch();
  const theme = useThemeSelector();
  const handleToggleTheme = () => {
    rDispatch(themeAction.toggleTheme());
  };

  const { isIndonesia, setIsIndonesia } = useContext(TranslateTextContext);
  const toggleTranslate = () => {
    setIsIndonesia((prevTheme) => !prevTheme);
  };

  const [state, dispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://restaurant-api.dicoding.dev/list"
        );
        const data = response.data.restaurants;
        dispatch(fetch_Success(data));
      } catch (error) {
        dispatch(fetch_Error(error.message));
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (state.data.length > 0) {
      const interval = setInterval(() => {
        dispatch(change_Index((state.currentIndex + 1) % state.data.length));
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [state.data.length, state.currentIndex]);

  return (
    <div>
      <HomeView
        isIndonesia={isIndonesia}
        toggleTranslate={toggleTranslate}
        loading={state.loading}
        data={state.data}
        currentIndex={state.currentIndex}
        theme={theme}
        toggleTheme={handleToggleTheme}
      />
    </div>
  );
};

export default Home;
