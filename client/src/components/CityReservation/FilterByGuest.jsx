import React from "react";
import { useDispatch } from "react-redux";
import { filterByGuest } from "../../redux/actions/postActions";

const FilterByGuest = ({ setCurrentPage }) => {
  const dispatch = useDispatch();

  const handleFilterByGuest = (e) => {
    dispatch(filterByGuest(e.target.value));
    setCurrentPage(0);
  };

  return (
    <div>
      <label>Filtered By:</label>
      <select onChange={(e) => handleFilterByGuest(e)}>
        <option disabled selected>
          Guest
        </option>
        <option value="All">All</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">15</option>
      </select>
    </div>
  );
};

export default FilterByGuest;
