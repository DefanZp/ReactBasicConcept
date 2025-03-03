import React, { memo } from "react";
import Card from "../../Components/Card Detail/CardDetail";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

const DetailView = ({ loading, restaurant, theme, toggleTheme }) => {
  return (
    <>
      {loading ? (
        <div className="flex flex-row h-full bg-[#FBFBFB]">
          <div className="w-[35%] pt-[156px] pl-[42px] bg-gray-300">
            <Skeleton height={50} width={200} />
            <Skeleton height={36} width={250} />
            <Skeleton height={24} width={150} />
          </div>

          <div className="w-[65%] pt-28 px-28 pb-16">
            <div className="flex flex-row items-center justify-between mb-7">
              <Skeleton width={200} height={34} />
              <Skeleton width={50} height={34} />
            </div>

            <Skeleton height={100} width={"85%"} />

            <div className="flex flex-row gap-3 mt-8">
              <Skeleton height={24} width={100} />
              <div className="flex flex-col gap-1">
                <Skeleton height={20} width={120} count={4} />
              </div>
            </div>

            <div className="flex flex-row gap-3 ml-28 mt-8">
              <Skeleton height={24} width={100} />
              <div className="flex flex-col gap-1">
                <Skeleton height={20} width={120} count={4} />
              </div>
            </div>

            <Skeleton height={40} width={250} className="mt-12" />
          </div>
        </div>
      ) : (
        <>
          <div className="flex felx-row h-full bg-[#FBFBFB]">
            <div
              className="w-[35%] bg-black bg-opacity-35 bg-blend-darken bg-cover bg-center  pt-[156px] pl-[42px]"
              style={{
                backgroundImage: `url(https://restaurant-api.dicoding.dev/images/medium/${restaurant?.pictureId})`,
              }}
            >
              {loading ? (
                <Skeleton />
              ) : (
                <>
                  <h1 className="text-white">Restaurant</h1>
                  <h1 className="text-white text-[36px] font-semibold mb-24">
                    {restaurant?.name}
                  </h1>
                  <p className="text-white flex flex-row text-[18px] items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                    {restaurant?.city},{restaurant.address}
                  </p>
                </>
              )}
            </div>

            <div className="w-[65%] pt-12 px-28 pb-16 dark:bg-black">
              <nav className="Navbar bg-[#FBFBFB] dark:bg-black dark:text-white">
                <svg
                  className="w-16 h-16 dark:fill-[#FBFBFB]"
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
                <button onClick={toggleTheme}>
                  {theme === "light" ? "dark" : "light"}
                </button>
              </nav>

              <div className="flex flex-row items-center justify-between mb-7">
                <p
                  className="text-[34px] font-semibold"
                  style={{
                    color: theme === "light" ? "black" : "white",
                  }}
                >
                  {restaurant?.name}
                </p>
                <p className="text-[34px] text-[#FFD700] outline-black font-semibold">
                  {restaurant?.rating}
                </p>
              </div>

              <div className="w-full border-b-[1px] border-s-black mb-8">
                <p className="text-[#a8a8a8] font-medium  pb-8 w-[85%] ">
                  {restaurant?.description.substring(0, 300)}
                </p>
              </div>

              <div className="flex flex-row w-full ">
                <div className="flex flex-row gap-3 mb-24">
                  <p className="text-[#a8a8a8] font-medium">Makanan : </p>
                  <div className="flex flex-col">
                    {restaurant.menus?.foods?.slice(0, 4).map((food) => (
                      <>
                        <p
                          className="font-medium dark:text-white"
                        >
                          - {food.name}
                        </p>
                      </>
                    ))}
                  </div>
                </div>

                <div className="flex flex-row gap-3 ml-28">
                  <p className="text-[#a8a8a8] font-medium">Minuman : </p>
                  <div className="flex flex-col">
                    {restaurant.menus?.drinks?.slice(0, 4).map((drink) => (
                      <>
                        <p
                          className="font-medium dark:text-white"
                        >
                          - {drink.name}
                        </p>
                      </>
                    ))}
                  </div>
                </div>
              </div>

              <p
                className="pb-8 text-lg font-medium dark:text-white"
              >
                Lihat restoran lainnya
              </p>
              <Card />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default memo(DetailView);
