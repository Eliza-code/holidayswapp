import React from "react";
import { useDispatch } from "react-redux";
import { filterBySleeps } from "../../redux/actions/postActions";

const FilterBySleeps = ({ houses, setCurrentPage }) => {
  const dispatch = useDispatch();

  const handleFilteredBySleeps = (e) => {
    dispatch(filterBySleeps(e.target.value));
    setCurrentPage(0);
  };

  return (
    <div>      
      <select onChange={(e) => handleFilteredBySleeps(e)}>
        <option disabled selected>
          Guest
        </option>
        <option value="All">All</option>
        {
                    houses && houses.sort((a, b) => {
                      if (a.sleeps > b.sleeps) {
                        return 1;
                      }
                      if (a.sleeps < b.sleeps) {
                        return -1;
                      }
                      return 0;
                    })
                    .map(el => {
                        return(
                        <option value={`${el.sleeps}`}>
                            {el.sleeps}
                        </option>
                    )})
                }
      </select>
    </div>
  );
};

export default FilterBySleeps;