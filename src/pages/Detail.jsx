import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Details = () => {
  const { id } = useParams(); 
  const [restaurant, setRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchRestaurantDetail = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://restaurant-api.dicoding.dev/detail/${id}`);
        setRestaurant(response.data.restaurant);
      } catch (error) {
        console.error("Error fetching restaurant detail:", error);
      }
      finally {
        setLoading(false);
      }
    };

    fetchRestaurantDetail();
  }, [id]);



  return (
    <div >
      {loading ? ( 
        <p>Loading...</p> 
      ) : (
        <>
        <img
        src={`https://restaurant-api.dicoding.dev/images/medium/${restaurant?.pictureId}`}
        alt={restaurant?.name}
      />
      <h1>{restaurant?.name}</h1>
      <p>{restaurant?.city}</p>
      <p>{restaurant?.description}</p>
      </>
      )}
    </div>
  );
};

export default Details;