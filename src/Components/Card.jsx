import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Card = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restaurant-api.dicoding.dev/list");
        setData(response.data.restaurants);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-row justify-items-center gap-3 overflow-auto p-3">
      {loading ? ( 
        <p>Loading...</p> 
      ) : (
        data?.map((item) => (
          <Link to={`/restaurant/${item?.id}`} key={item?.id}>
            <div>
              <img
                className="object-cover min-w-32 h-24"
                src={`https://restaurant-api.dicoding.dev/images/medium/${item?.pictureId}`}
                alt={item?.name}
              />
              <p>{item?.name}</p>
              <p>{item?.city}</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default Card;
