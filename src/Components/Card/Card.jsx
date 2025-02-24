import { useEffect, useState, useReducer, useContext } from "react";
import axios from "axios";
import CardView from "./CardView"
import "./Card.scss"
import TranslateTextContext from "../context/Translate";

const initialState = {
  data: [],
  loading: true,
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "Fetch_success" :
      return {
        ...state,
        data: action.payload,
        loading : false,
      };

    case "Fetch_error" :
      return {
        ...state,
        error: action.payload,
        loading : false,
      };
     
    default:
      throw new Error(`Unhandled action type${action.type}`)  
  }
} 


const Card = () => {
  const [state, dispatch] = useReducer (Reducer, initialState)
  const {isIndonesia} = useContext(TranslateTextContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://restaurant-api.dicoding.dev/list"
        );
        const data= (response.data.restaurants);
        dispatch ({type:"Fetch_success", payload: data});
      } catch (error) {
        dispatch ({type : "Fetch_error", payload : error.message})
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
