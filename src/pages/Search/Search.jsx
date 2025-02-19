import { useSearchParams } from "react-router-dom";
import { useEffect, useState,useReducer } from "react";
import axios from "axios";
import SearchView from "./SearchView";

const initialState = {
  restaurant : [],
  loading : true,
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "Fetch_success" :
      return {
        ...state,
        restaurant: action.payload,
        loading: false,
      };

    case "Fetch_error" :
      return {
        ...state,
        error: action.payload,
        loading:false
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

  const handleSearch = () => {
    setSearchParams({ q: inputValue });
  };

  return (
    <SearchView
    restaurant={state.restaurant}
    loading={state.loading}
    setInputValue={setInputValue}
    handleSearch={handleSearch}
    inputValue={inputValue}
    searchQuery={searchQuery}
    error={state.error}
    />
  );
};

export default SearchRestaurantPage;
