import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { orderByRating } from "../../redux/actions/postActions";
import StarRateIcon from "@mui/icons-material/StarRate";

const OrderByRating = ({ setCurrentPage, setOrder }) => {
  const dispatch = useDispatch();
  const [type, setType] = React.useState("");

  function handleSortRating(e) {
    e.preventDefault();
    dispatch(orderByRating(e.target.value));
    setCurrentPage(0);
    setType(e.target.value);
    setOrder(e.target.value);
  }

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">
          <StarRateIcon sx={{ height: 40 }} />
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={type}
          label="Rating"
          onChange={handleSortRating}
        >
          <MenuItem value="" disabled={true}>
            <em>Rating</em>
          </MenuItem>
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="mayor">Higher</MenuItem>
          <MenuItem value="menor">Lower</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default OrderByRating;
