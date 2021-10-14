import React from "react";
import { useDispatch } from "react-redux";
import { filterByType } from "../../redux/actions/postActions";


const FilterByType = ( { setCurrentPage } ) => {
  const dispatch = useDispatch();

  const handleFilteredByType = (e) => {
    dispatch(filterByType(e.target.value));
    setCurrentPage(0);
  };

  return (
    <div>
      <label>Filtered By:</label>
      <select onChange={(e) => handleFilteredByType(e)}>
      <option disabled selected>Type</option>
        <option value="All">All</option>
        <option value="House">House</option>
        <option value="Apartment">Apartment</option>
      </select>
    </div>
  );
};

export default FilterByType;
