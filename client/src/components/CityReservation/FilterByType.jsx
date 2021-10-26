import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { filterByType } from "../../redux/actions/postActions";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

const FilterByType = ({ setCurrentPage }) => {
  const [type, setType] = React.useState("");

  const dispatch = useDispatch();

  const handleFilterByType = (e) => {
    dispatch(filterByType(e.target.value));
    setCurrentPage(0);
    setType(e.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">
          <HomeWorkIcon sx={{ height: 40 }} />
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={type}
          label="Type"
          onChange={handleFilterByType}
        >
          <MenuItem value="" disabled={true}>
            <em>Type</em>
          </MenuItem>
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="House">House</MenuItem>
          <MenuItem value="Apartment">Apartment</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterByType;
