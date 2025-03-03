import { useEffect, useState, useReducer, useContext } from "react";
import axios from "axios";
import CardView from "./CardView"
import "./Card.scss"
import TranslateTextContext from "../context/Translate";
import dataReducer, {initialState} from "../store/reducers/dataReducer";
import { fetch_Success, fetch_Error } from "../store/actions/dataAction";


const Card = () => {
  const [state, dispatch] = useReducer (dataReducer, initialState)
  const {isIndonesia} = useContext(TranslateTextContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://restaurant-api.dicoding.dev/list"
        );
        const data= (response.data.restaurants);
        dispatch (fetch_Success(data));
      } catch (error) {
        dispatch (fetch_Error(error.message))
      } 
    };

    fetchData();
  }, []);

  return (
    <div>
      <CardView
      loading={state.loading}
      data={state.data}
      isIndonesia={isIndonesia}
      />
    </div>
  );
};

export default Card;
