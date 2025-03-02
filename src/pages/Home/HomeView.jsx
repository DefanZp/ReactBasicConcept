import React, { memo } from "react";
import { Link } from "react-router-dom";
import Card from "../../Components/Card/Card";
import Bg from "../../assets/Bg.jpg";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Home.scss"

const HomeView = ({ loading, data, currentIndex, toggleTranslate, isIndonesia }) => {
  return (
    <>
      <section className="Container">
        <nav className="Navbar">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/restaurant--v1.png"
            alt="restaurant--v1"
          />
          <ul className="Nav-ul">
            <li className="Nav-li">
              <Link to={"/"}>
                <p>Home</p>
              </Link>
              <Link to={"/search"}>
                <p>Search</p>
              </Link>
              <p>About</p>
            </li>
          </ul>
          <button onClick={toggleTranslate}>
            {isIndonesia === true ? "Bahasa Inggris" : "Bahasa Indonesia"}
          </button>
        </nav>

        {isIndonesia === true ? (
            <h1 className="h1">
            Temukan restaurantmu!
          </h1>
        ) : (
            <h1 className="h1">
            Find your restaurant!
          </h1>
        )}
        

        <div className="Container-image">
          <div className="C-container-image">
            {loading ? (
              <Skeleton className="w-[600px] h-[350px]  rounded-lg shadow-xl" />
            ) : data.length > 0 ? (
              <img
                src={`https://restaurant-api.dicoding.dev/images/medium/${data[currentIndex]?.pictureId}`}
                alt={data[currentIndex]?.name}
                className="Image"
              />
            ) : (
              <p className="p">Tidak ada data</p>
            )}
          </div>

          <div className="Container-text">
            {loading ? (
              <>
              <Skeleton className="pt-4 mb-2"/>
              <Skeleton count={7}/>
              </>
            ) : (
              <>
              {isIndonesia === true ? (
                <p className="h-text">
                Mau cari tempat makan enak?
              </p>
              ) : (
                <p className="h-text">
                Want to find a good place to eat?
              </p>
              )}
              
              {isIndonesia === true ? (
                <p className="">
                Di sini, kamu bisa temukan berbagai restoran dengan makanan
                lezat dan suasana yang pas buat segala momen. Mau makan bareng
                keluarga, hangout sama teman, atau makan malam romantis? Kami
                punya rekomendasi yang pas buat kamu. Gak perlu bingung, cukup
                cari, klik, dan nikmati makanannya. Yuk, cari restoran yang
                cocok buatmu!
              </p>
              ) : (
                <p className="">
                Here, you can find various restaurants with delicious food and
                atmosphere that suits every moment. Want to eat with family,
                hang out with friends, or have a romantic dinner? We have
                recommendations that suit you. Don't worry, just search, click,
                and enjoy your meal. Let's find a restaurant that suits you!
              </p>
              )}
                
              </>
            )}
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

export default memo(HomeView);
