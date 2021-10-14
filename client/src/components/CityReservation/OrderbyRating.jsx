import React from "react";
import { useDispatch } from "react-redux";
import { orderByRating } from "../../redux/actions/postActions";

const OrderByRating = ({ setCurrentPage, setOrder }) => {
  const dispatch = useDispatch();

  function handleSortRating(e) {
    e.preventDefault();
    dispatch(orderByRating(e.target.value));
    setCurrentPage(0);
    setOrder(e.target.value);
  }

  return (
    <div>
      
      <select
        onChange={(e) => {
          handleSortRating(e);
        }}
      >
        <option disabled selected>
          Rating
        </option>
        <option value="mayor">Higher</option>
        <option value="menor">Lower</option>
      </select>
    </div>
  );
};

export default OrderByRating;
