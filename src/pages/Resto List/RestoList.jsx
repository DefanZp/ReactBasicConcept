import React, { useState } from "react";
import "./RestoList.scss";
import RestoListView from "./RestoListView";
import { useDispatch } from "react-redux";
import { useRestoListSelector } from "../../store/RestoList/restoSelector";
import { restoAction } from "../../store/RestoList/RestoListSlice";

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
  const restos = useRestoListSelector();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewResto({
      ...newResto,
      [name]: value,
    });
  };

  const handleAddResto = () => {
    dispatch(restoAction.addResto([...restos, newResto]));
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
    const updatedResto = restos.filter((data) => data.id !== id);
    dispatch(restoAction.update([...restos, updatedResto]));
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
