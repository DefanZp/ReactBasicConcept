import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./RestoList.scss";

const RestoListView = ({
  restoData,
  newResto,
  handleChange,
  handleAddResto,
  handleDeleteResto,
}) => {
  return (
    <>
      <nav className="flex flex-row mb-14 px-[128px] pt-[32px]">
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

      <div className="flex flex-row items-start p-6 px-[128px]">
        <div className="flex flex-row gap-4 w-[40%] flex-wrap justify-around">
          <div className="flex flex-col gap-4">
            <label htmlFor="name">Nama Restoran:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newResto.name}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="cuisine">Jenis Masakan:</label>
            <input
              type="text"
              id="cuisine"
              name="cuisine"
              value={newResto.cuisine}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="address">Alamat:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={newResto.address}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="city">Kota:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={newResto.city}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="rating">Rating:</label>
            <input
              type="number"
              max={5}
              id="rating"
              name="rating"
              value={newResto.rating}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="flex flex-col gap-4 mb-4">
            <label htmlFor="reviews">Ulasan:</label>
            <input
              type="number"
              id="reviews"
              max={10}
              name="reviews"
              value={newResto.reviews}
              onChange={handleChange}
              className="input"
            />
          </div>
          <button
            className="text-center bg-green-600 text-white rounded-md py-2 w-[100%]"
            onClick={handleAddResto}
          >
            Tambah Restoran
          </button>
        </div>

        <div className="ml-14">
          <ul>
            {restoData.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-2 shadow-lg p-4 rounded-lg"
              >
                <div className="flex flex-row gap-4">
                  <Link to={`/detail/${item.id}`} className="detail-link">
                    {item.name}
                  </Link>
                  <span>{item.cuisine}</span>
                </div>
                <p>{item.address}</p>

                <button
                  className="text-center bg-red-600 text-white rounded-md py-2"
                  onClick={() => handleDeleteResto(item.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

RestoListView.propTypes = {
  restoData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      cuisine: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired,
      reviews: PropTypes.number.isRequired,
    })
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
  newResto: PropTypes.shape({
    name: PropTypes.string.isRequired,
    cuisine: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
  }).isRequired,
  handleAddResto: PropTypes.func.isRequired,
  handleDeleteResto: PropTypes.func.isRequired,
};

export default RestoListView;
