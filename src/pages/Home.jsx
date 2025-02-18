import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import Bg from "../assets/Bg.jpg";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://restaurant-api.dicoding.dev/list"
        );
        setData(response.data.restaurants);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [data.length]); 

  return (
    <>
      <section className="bg-[#FBFBFB] pt-8 px-52 pb-32">
        <nav className="flex flex-row mb-14">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/restaurant--v1.png"
            alt="restaurant--v1"
          />
          <ul className="list-none flex flex-row flex-1 items-center justify-center">
            <li className="flex flex-row gap-12">
            <Link to={"/"}>
            <p>Home</p>
            </Link>
              <Link to={"/search"}>
                <p>Search</p>
              </Link>
              <p>About</p>
            </li>
          </ul>
        </nav>

        <h1 className="text-[46px] font-semibold pt-4 pl-4 pb-4 text-black text-center mb-20">
          Temukan restaurantmu!
        </h1>

        <div className="flex flex-row gap-10">
          <div className="w-[50%]">
            {loading ? (
              <p className="text-center">Loading...</p>
            ) : data.length > 0 ? (
              <img
                src={`https://restaurant-api.dicoding.dev/images/medium/${data[currentIndex]?.pictureId}`}
                alt={data[currentIndex]?.name}
                className="w-[600px] h-[350px] object-cover rounded-lg shadow-xl transition-opacity duration-500"
              />
            ) : (
              <p className="text-center">Tidak ada data</p>
            )}
          </div>

          <div className="flex flex-col w-[50%] justify-center">
            <p className=" mb-2 text-xl font-semibold"> Mau cari tempat makan enak?</p>
            <p className="">
              Di sini, kamu bisa temukan berbagai restoran dengan makanan lezat
              dan suasana yang pas buat segala momen. Mau makan bareng keluarga,
              hangout sama teman, atau makan malam romantis? Kami punya
              rekomendasi yang pas buat kamu. Gak perlu bingung, cukup cari,
              klik, dan nikmati makanannya. Yuk, cari restoran yang cocok
              buatmu!
            </p>
          </div>
        </div>
      </section>

      <section
        className="bg-black bg-opacity-80 bg-blend-darken"
        style={{
          backgroundImage: `url(${Bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Card />
      </section>
    </>
  );
};

export default Home;
