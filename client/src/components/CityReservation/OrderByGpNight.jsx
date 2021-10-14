import React from "react";
import { useDispatch } from "react-redux";
import { orderByPoints } from "../../redux/actions/postActions";

const OrderByGpNight = ({ setCurrentPage, setOrder }) => {
  const dispatch = useDispatch();

  function handleSortPoints(e) {
    e.preventDefault();
    dispatch(orderByPoints(e.target.value));
    setCurrentPage(0);
    setOrder(e.target.value);
  }

  return (
    <div>
      <label>Order By:</label>
      <select onChange={(e) => handleSortPoints(e)}>
        <option disabled selected>
          GP/Night
        </option>
        <option value="mayor">Higher</option>
        <option value="menor">Lower</option>
      </select>
    </div>
  );
};

export default OrderByGpNight;
