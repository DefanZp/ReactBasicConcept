import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState,useReducer } from "react";
import DetailView from "./DetailView";

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

const Details = () => {
  const { id } = useParams();
  const [state, dispatch] = useReducer (Reducer, initialState)

  useEffect(() => {
    const fetchRestaurantDetail = async () => {
      try {
        const response = await axios.get(
          `https://restaurant-api.dicoding.dev/detail/${id}`
        );
        const data= (response.data.restaurant);
        dispatch ({type:"Fetch_success", payload: data});
      } catch (error) {
        dispatch ({type : "Fetch_error", payload : error.message})
      } 
    };

    fetchRestaurantDetail();
  }, [id]);

  return (
    <div>
      <DetailView
      loading={state.loading}
      restaurant={state.data}
      />
    </div>
  );
};

export default Details;
