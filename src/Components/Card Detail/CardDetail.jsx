import { useEffect, useReducer } from "react";
import axios from "axios";
import CardDetailView from "./CardDetailView";
import dataReducer, { initialState } from "../../store/reducers/dataReducer";
import { fetch_Success, fetch_Error } from "../../store/actions/dataAction";

const Card = () => {
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

  return (
    <div>
      <CardDetailView loading={state.loading} data={state.data} />
    </div>
  );
};

export default Card;
