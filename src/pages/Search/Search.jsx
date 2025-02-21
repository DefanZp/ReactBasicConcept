import { data, useSearchParams } from "react-router-dom";
import { useEffect, useState,useReducer, useCallback } from "react";
import axios from "axios";
import "./Search.scss"
import SearchView from "./SearchView";

const initialState = {
  restaurant : [],
  loading : true,
  searching : false
};

const Reducer = (state, action) => {
  switch (action.type) {

    case "Searching":  
      return {
        ...state,
        searching: true,  
      };

    case "Fetch_success" :
      return {
        ...state,
        restaurant: action.payload,
        loading: false,
        searching: false
      };

    case "Fetch_error" :
      return {
        ...state,
        error: action.payload,
        loading:false,
        searching: false
      };

    default :
    throw new Error(`Unhandled action type:${action.type}`)  
  }
}


const SearchRestaurantPage = () => {
  const [state, dispatch] = useReducer (Reducer, initialState)
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");
  const [inputValue, setInputValue] = useState(searchQuery);


  useEffect(() => {
    const fetchRestaurant = async () => {
      dispatch ({type:"Searching"})
      try {
        const response = await axios.get(
          `https://restaurant-api.dicoding.dev/search?q=${searchQuery}`
        );
        const restaurant = (response.data.restaurants);
        dispatch ({type:"Fetch_success", payload: restaurant});
      } catch (error) {
        dispatch ({type : "Fetch_error", payload : error.message})
      } 
    };

    fetchRestaurant();
  }, [searchQuery]);


  const handleSearch = useCallback(() => {
    setSearchParams({ q: inputValue });
  }, [inputValue, setSearchParams]);

  return (
    <SearchView
    restaurant={state.restaurant}
    loading={state.loading}
    setInputValue={setInputValue}
    handleSearch={handleSearch}
    inputValue={inputValue}
    searchQuery={searchQuery}
    error={state.error}
    searching={state.searching}
    />
  );
};

export default SearchRestaurantPage;
