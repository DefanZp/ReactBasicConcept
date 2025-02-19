import { useEffect,useReducer } from "react";
import axios from "axios";
import CardDetailView from "./CardDetailView";

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
      <CardDetailView
      loading={state.loading}
      data={state.data}
      />
    </div>
  );
};

export default Card;
