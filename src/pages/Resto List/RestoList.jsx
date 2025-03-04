import React, { useState } from "react";
import "./RestoList.scss";
import RestoListView from "./RestoListView";
import { useDispatch, useSelector } from "react-redux";
import { add_Resto, delete_Resto } from "../../store/actions/restoListAction";

const RestoList = () => {
  const [newResto, setNewResto] = useState({
    id: 3,
    name: "",
    cuisine: "",
    address: "",
    city: "",
    rating: 0,
    reviews: 0,
  });

  const dispatch = useDispatch();
  const restos = useSelector((state) => state.resto.resto);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewResto({
      ...newResto,
      [name]: value,
    });
  };

  const handleAddResto = () => {
    dispatch(add_Resto(newResto));
    setNewResto({
      ...newResto,
      id: Math.random().toString(36).substring(2, 9),
      name: "",
      cuisine: "",
      address: "",
      city: "",
      rating: 0,
      reviews: 0,
    });
  };

  const handleDeleteResto = (id) => {
    dispatch(delete_Resto(id));
  };

  return (
    <RestoListView
      restoData={restos}
      newResto={newResto}
      handleChange={handleChange}
      handleAddResto={handleAddResto}
      handleDeleteResto={handleDeleteResto}
    />
  );
};

export default RestoList;
