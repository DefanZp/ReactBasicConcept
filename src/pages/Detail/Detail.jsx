import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useReducer } from "react";
import DetailView from "./DetailView";
import dataReducer, { initialState } from "../../store/reducers/dataReducer";
import { fetch_Success, fetch_Error } from "../../store/actions/dataAction";
import { useSelector, useDispatch } from "react-redux";
import useThemeSelector from "../../store/Theme/themeSelector";
import { themeAction } from "../../store/Theme/ThemeSlice";

const Details = () => {
  const rDispatch = useDispatch();
  const theme = useThemeSelector();
  const handleToggleTheme = () => {
    rDispatch(themeAction.toggleTheme());
  };

  const { id } = useParams();
  const [state, dispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    const fetchRestaurantDetail = async () => {
      try {
        const response = await axios.get(
          `https://restaurant-api.dicoding.dev/detail/${id}`
        );
        const data = response.data.restaurant;
        dispatch(fetch_Success(data));
      } catch (error) {
        dispatch(fetch_Error(error.message));
      }
    };

    fetchRestaurantDetail();
  }, [id]);

  return (
    <div>
      <DetailView
        loading={state.loading}
        restaurant={state.data}
        theme={theme}
        toggleTheme={handleToggleTheme}
      />
    </div>
  );
};

export default Details;
