import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState,useReducer } from "react";
import DetailView from "./DetailView";
import dataReducer, {initialState} from "../../Components/store/reducers/dataReducer";
import { fetch_Success,fetch_Error } from "../../Components/store/actions/dataAction";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../Components/store/actions/themeAction";


const Details = () => {
  const rDispatch = useDispatch();
  const theme = useSelector ((state) => state.theme.theme);
  const handleToggleTheme = () => {
    rDispatch(toggleTheme());
  }

  const { id } = useParams();
  const [state, dispatch] = useReducer (dataReducer, initialState)

  useEffect(() => {
    const fetchRestaurantDetail = async () => {
      try {
        const response = await axios.get(
          `https://restaurant-api.dicoding.dev/detail/${id}`
        );
        const data= (response.data.restaurant);
        dispatch (fetch_Success(data));
      } catch (error) {
        dispatch (fetch_Error(error.message))
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
