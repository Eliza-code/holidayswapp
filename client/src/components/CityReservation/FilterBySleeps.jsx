import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { filterBySleeps } from "../../redux/actions/postActions";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";

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


      <FormControl sx={{ m: 1, minWidth: 120 }}>
    <InputLabel id="demo-simple-select-helper-label"><EmojiPeopleIcon sx={{ height: 40 }} /></InputLabel>
    <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={houses.type}
          label="Age"
          onChange={handleFilteredBySleeps}
        >
    <MenuItem value=""><em>Sleeps</em></MenuItem>
    <MenuItem value="All">All</MenuItem>
    <MenuItem value="House">House</MenuItem>
    <MenuItem value="Apartment">Apartment</MenuItem>

        </Select>
    </FormControl>


    </div>
  );
};

export default FilterBySleeps;
