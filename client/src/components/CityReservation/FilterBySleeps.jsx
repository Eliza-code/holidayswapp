import React from "react";
import { useDispatch } from "react-redux";
import { filterBySleeps } from "../../redux/actions/postActions";

const FilterBySleeps = ({ houses, setCurrentPage }) => {
  const dispatch = useDispatch();

  const handleFilteredBySleeps = (e) => {
    dispatch(filterBySleeps(e.target.value));
    setCurrentPage(0);
  };

  const sleepsHouses = houses?.map((el) => el.sleeps)
  const sleeps = [...new Set(sleepsHouses)].sort()

  return (
    <div>
      <label>Filter By:</label>
      <select onChange={(e) => handleFilteredBySleeps(e)}>
        <option disabled selected>
          Guest
        </option>
        <option value="All">All</option>
        {sleeps.map((el) => {
          return <option value={`${el}`}>{el}</option>;
        })}
      </select>
    </div>
  );
};

export default FilterBySleeps;
