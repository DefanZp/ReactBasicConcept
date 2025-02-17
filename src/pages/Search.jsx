import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SearchRestaurantPage = () => {
  
    const [searchParams,setSearchParams]= useSearchParams();
    const searchQuery = searchParams.get("q");
    const [restaurant,setRestaurant]= useState([]);
    const [loading, setLoading]= useState(true);

    useEffect(() => {
        const fetchRestaurant = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://restaurant-api.dicoding.dev/search?q=${searchQuery}`);
                setRestaurant(response.data.restaurants);
            }
            catch (error) {
                console.error("Error fetching data:", error);
            }
            finally {
                setLoading(false);
            }
        };
        
        fetchRestaurant();
        }, [searchQuery]);

        const handleSearch = (event) => {
            setSearchParams({q: event.target.value});
        }

  return (
    <>
    <div className="flex flex-col items-center pt-8">

        <h1>Cari Restoran</h1>
        <input className="mt-5 mb-5" type="text" placeholder="Cari disini..." value={searchQuery} onChange={handleSearch}>
        </input>
        
        {loading ? (
            <p>Loading...</p>
        ) : (
            <div className="w-[100%] flex flex-row overflow-x-scroll gap-4">
                {restaurant.map((restaurants) => (
                    <Link to={`/restaurant/${restaurants.id}`}>
                    <div>
                    <img className="min-w-32" src={`https://restaurant-api.dicoding.dev/images/medium/${restaurants.pictureId}`}></img>    
                    <h3>{restaurants.name}</h3>
                    <p>{restaurants.city}</p>
                    <p>{restaurants.rating}</p>
                    </div>
                    </Link>
                )) }
            </div>
        )}
    </div>
    </>
  );
};

export default SearchRestaurantPage;
