import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByType } from "../../redux/actions/postActions";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

const FilterByType = ({ setCurrentPage }) => {
  const houses = useSelector((state) => state.postReducer.searchResults);
  console.log("-----",houses);
  const dispatch = useDispatch();

  const handleFilterByType = (e) => {
    dispatch(filterByType(e.target.value));
    setCurrentPage(0);
  };

  return (
    <div>      
      {/* <select onChange={(e) => handleFilterByType(e)}>
        <option disabled selected>
          Type
        </option>
        <option value="All">All</option>
        <option value="House">House</option>
        <option value="Apartment">Apartment</option>
      </select>
     */}

    <FormControl sx={{ m: 1, minWidth: 120 }}>
    <InputLabel id="demo-simple-select-helper-label"><HomeWorkIcon sx={{ height: 40 }} /></InputLabel>
    <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={houses.type}
          label="Age"
          onChange={handleFilterByType}
        >
    <MenuItem value=""><em>Type</em></MenuItem>
    <MenuItem value="All">All</MenuItem>
    <MenuItem value="House">House</MenuItem>
    <MenuItem value="Apartment">Apartment</MenuItem>

        </Select>
    </FormControl>
    </div>
  );
};

export default FilterByType;
