import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterBySleeps } from "../../redux/actions/postActions";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";

const FilterBySleeps = ({ setCurrentPage }) => {
  const houses = useSelector((state) => state.postReducer.allSearchResults);
  const dispatch = useDispatch();
  const [type, setType] = React.useState("");

  const handleFilteredBySleeps = (e) => {
    dispatch(filterBySleeps(e.target.value));
    setCurrentPage(0);
    setType(e.target.value);
  };

  const sleepsHouses = houses?.map((el) => el.sleeps);
  const sleeps = [...new Set(sleepsHouses)].sort();

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">
          <EmojiPeopleIcon sx={{ height: 40 }} />
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={type}
          label="sleeps"
          onChange={handleFilteredBySleeps}
        >
          <MenuItem value="" disabled={true}>
            <em>Sleeps</em>
          </MenuItem>
          <MenuItem value="All">All</MenuItem>
          {sleeps.map((el) => {
            return (
              <MenuItem value={el} key={el}>
                {el}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterBySleeps;
