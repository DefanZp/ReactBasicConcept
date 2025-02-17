import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Details = () => {
  const { id } = useParams(); 
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurantDetail = async () => {
      try {
        const response = await axios.get(`https://restaurant-api.dicoding.dev/detail/${id}`);
        setRestaurant(response.data.restaurant);
      } catch (error) {
        console.error("Error fetching restaurant detail:", error);
      }
    };

    fetchRestaurantDetail();
  }, [id]);

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <img
        src={`https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}`}
        alt={restaurant?.name}
      />
      <h1>{restaurant.name}</h1>
      <p>{restaurant.city}</p>
      <p>{restaurant.description}</p>
      
    </div>
  );
};

export default Details;