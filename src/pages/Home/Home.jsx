import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import HomeView from "./HomeView";

const initialState = {
  data: [],
  loading: true,
  currentIndex: (0)
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

    case  "Change" :
      return {
        ...state,
        currentIndex: action.payload,
      }
     
    default:
      throw new Error(`Unhandled action type${action.type}`)  
  }
} 

const Home = () => {
  const [state,dispatch ]= useReducer (Reducer, initialState)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://restaurant-api.dicoding.dev/list"
        );
        const data =(response.data.restaurants);
        dispatch ({type:"Fetch_success", payload:data})
      } catch (error) {
        dispatch ({type:"Fetch_error", payload :error.message})
      } 
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (state.data.length > 0) {
      const interval = setInterval(() => {
        dispatch ({
          type: "Change",
          payload: ( state.currentIndex + 1) % (state.data.length)
        })
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [state.data.length, state.currentIndex]);

  return (
    <div>
      <HomeView
      loading={state.loading}
      data={state.data}
      currentIndex={state.currentIndex}
      />
    </div>
  );
};

export default Home;
