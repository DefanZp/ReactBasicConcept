import React from 'react'
import { Link } from 'react-router-dom'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SearchView = ({
    loading,
    restaurant,
    setInputValue,
    handleSearch,
    inputValue,
    searchQuery,
    searching,
}) => {
  return (
    <>
      <div className="flex flex-col w-full">
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
            Cari restaurantmu!
          </h1>

        {loading ? (
          <Skeleton className='h-[56px] rounded-lg'/>
        ) : (
          <div className="flex flex-row text-[#a8a8a8] items-center shadow-lg justify-between pl-5">
          <div className="flex flex-row gap-4">
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          
          <input
            className=" focus-visible: outline-none bg-[#FBFBFB]"
            type="text"
            placeholder="Cari disini..."
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          ></input>

          </div>  

          <button onClick={handleSearch} className="bg-black px-4 py-4 text-white"> Cari</button>    
        </div>
        )}
          
        </section>

        <section className='bg-[#FBFBFB]'>
        <div className="grid grid-cols-3 gap-y-16 justify-items-center gap-3 overflow-auto px-52 pb-24"> 
              
          {searching ? [...Array(6)].map(() => (
          <div
            className="flex flex-col justify-between pt-5 pl-5 pr-5 pb-8 w-64 h-80 bg-gray-300 bg-opacity-30 rounded-xl"
          >
            <Skeleton className='w-[124px] h-[36px]'/>

            <div className='gap-12'>
            <Skeleton className='w-[124px] h-[28px]'/>  
            <Skeleton className='w-[124px] h-[20px]'/> 
            <Skeleton className='w-[124px] h-[20px]'/>
            </div> 
             
          </div>
        )) :  ( searchQuery && (
                restaurant?.map((item) => (
                    <Link to={`/restaurant/${item?.id}`} key={item?.id}>
                      <div
                        className="flex flex-col justify-between pt-5 pl-5 pb-8 w-64 h-80 bg-cover bg-center bg-black bg-opacity-30 bg-blend-darken rounded-xl"
                        style={{
                          backgroundImage: `url(https://restaurant-api.dicoding.dev/images/medium/${item?.pictureId})`,
                        }}
                      >
                        <p className=" bg-black bg-opacity-50 px-6 py-2 rounded-full text-white text-sm w-fit">
                          Restaurant
                        </p>
        
                        <div className="flex flex-col pl-3">
                          <p className="text-white text-xl font-semibold mb-2">
                            {item?.name.length > 20
                              ? `${item?.name.substring(0, 15)}...`
                              : item?.name}
                          </p>
                          <p className="text-white flex flex-row mb-1 gap-2 text-sm">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="size-5"
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
                            {item?.city}
                          </p>
        
                          <p className="text-white flex flex-row gap-2 text-sm">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                              />
                            </svg>
                            {item?.rating}
                          </p>
                        </div>
                      </div>
                    </Link>
                  )
            )
          ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default SearchView
