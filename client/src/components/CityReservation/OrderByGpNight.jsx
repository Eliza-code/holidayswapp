import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { orderByPoints } from "../../redux/actions/postActions";
import MonetizationOn from "@mui/icons-material/MonetizationOn";

const OrderByGpNight = ({ setCurrentPage, setOrder }) => {
  const dispatch = useDispatch();
  const [type, setType] = React.useState("");

  function handleSortPoints(e) {
    e.preventDefault();
    dispatch(orderByPoints(e.target.value));
    setCurrentPage(0);
    setType(e.target.value);
    setOrder(e.target.value);
  }

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">
          <MonetizationOn sx={{ height: 40 }} />
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={type}
          label="GP/Night"
          onChange={handleSortPoints}
        >
          <MenuItem value="" disabled={true}>
            <em>GP/Night</em>
          </MenuItem>
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="mayor">Higher</MenuItem>
          <MenuItem value="menor">Lower</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default OrderByGpNight;
