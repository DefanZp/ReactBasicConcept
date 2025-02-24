import React, { memo } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const CardView = ({

   loading, data, isIndonesia 
  }) => {
  return (
    <>
      <div className="flex flex-row pt-24 px-52 mb-28">
        {loading ? (
          <div className="w-full flex flex-row">
          <div className="w-[50%] flex flex-col justify-between">
            <Skeleton height={50} width={300} />
            <Skeleton count={3} />
            <Skeleton width={150} height={40} />
          </div>
          <div className="flex w-[50%] justify-end">
            <Skeleton width={250} height={250} />
          </div>
        </div>
        ) : data?.[0] ? (
          <>
            <div className="w-[50%] flex flex-col justify-between">
              <p className="font-semibold text-[42px] text-white">
                {data[0].name}
              </p>
              <p className="text-white">
                {data[0].description.substring(0, 200)}...
              </p>
              <Link to={`/restaurant/${data[0]?.id}`} key={data[0]?.id}>
              {isIndonesia === true ? (
                <button className="flex flex-row items-center font-semibold gap-2 text-white">
                Lihat Detail
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
              ) : (
                <button className="flex flex-row items-center font-semibold gap-2 text-white">
                See Detail
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
              )}
                
              </Link>
            </div>

            <div className="flex w-[50%] justify-end">
              {}
              <img
                className="h-full w-[85%]  rounded-xl"
                src={`https://restaurant-api.dicoding.dev/images/medium/${data[0]?.pictureId}`}
              ></img>
            </div>
          </>
        ) : (
          <p>Tidak ada data..</p>
        )}
      </div>

      <div className="grid grid-cols-3 gap-y-16 justify-items-center gap-3 overflow-auto px-52 pb-24">
        {loading ? [...Array(6)].map(() => (
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
                )) : (
          data?.map((item) => (
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
          ))
        )}
      </div>
    </>
  );
};

export default memo(CardView);
