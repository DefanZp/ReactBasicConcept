import React, { memo } from "react";
import { Link } from "react-router-dom";
import Card from "../../Components/Card/Card";
import Bg from "../../assets/Bg.jpg";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Home.scss";

const HomeView = ({
  loading,
  data,
  currentIndex,
  toggleTranslate,
  isIndonesia,
  theme,
  toggleTheme,
}) => {
  return (
    <>
      <section
        className="Container bg-[#FBFBFB] dark:bg-black"
      >
        <nav
          className="Navbar bg-[#FBFBFB] dark:bg-black dark:text-white"
        >
          <svg className="w-16 h-16 dark:fill-[#FBFBFB]"
            viewBox="0 0 15 15"
            version="1.1"
            id="restaurant"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                id="path11774"
                d="M3.5,0l-1,5.5c-0.1464,0.805,1.7815,1.181,1.75,2L4,14c-0.0384,0.9993,1,1,1,1s1.0384-0.0007,1-1L5.75,7.5
	c-0.0314-0.8176,1.7334-1.1808,1.75-2L6.5,0H6l0.25,4L5.5,4.5L5.25,0h-0.5L4.5,4.5L3.75,4L4,0H3.5z M12,0
	c-0.7364,0-1.9642,0.6549-2.4551,1.6367C9.1358,2.3731,9,4.0182,9,5v2.5c0,0.8182,1.0909,1,1.5,1L10,14c-0.0905,0.9959,1,1,1,1
	s1,0,1-1V0z"
              ></path>{" "}
            </g>
          </svg>
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
          <button onClick={toggleTheme}>
            {theme === "light" ? "dark" : "light"}
          </button>
        </nav>

        <h1
          className="h1 dark:text-white"
        >
          {isIndonesia === true
            ? "Temukan restaurantmu!"
            : "Find your restaurant!"}
        </h1>

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
                <Skeleton className="pt-4 mb-2" />
                <Skeleton count={7} />
              </>
            ) : (
              <>
                <p
                  className="h-text dark:text-white"
                >
                  {isIndonesia === true
                    ? "Mau cari tempat makan enak"
                    : "Want to find a good place to eat?"}
                </p>

                <p
                  className="dark:text-white"
                >
                  {isIndonesia === true
                    ? `Di sini, kamu bisa temukan berbagai restoran dengan makanan
                lezat dan suasana yang pas buat segala momen. Mau makan bareng
                keluarga, hangout sama teman, atau makan malam romantis? Kami
                punya rekomendasi yang pas buat kamu. Gak perlu bingung, cukup
                cari, klik, dan nikmati makanannya. Yuk, cari restoran yang
                cocok buatmu!`
                    : `Here, you can find various restaurants with delicious food and
                atmosphere that suits every moment. Want to eat with family,
                hang out with friends, or have a romantic dinner? We have
                recommendations that suit you. Don't worry, just search, click,
                and enjoy your meal. Let's find a restaurant that suits you!`}
                </p>
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
