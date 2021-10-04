import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux";
import { getHouseCity } from "../../redux/actions/postActions";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { clearPage } from "../../redux/actions/postActions";
import './SearchBar.css';
import { clearPage } from "../../redux/actions/postActions.js";

const SearchBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();  
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getHouseCity(input.trim()));
    history.push(`/announcements/city/${input}`);   
  }  

  return (
    <div className='search'>
      <form onSubmit={handleSubmit}>
        <Stack direction="row"  spacing={0.5}>
          <TextField 
          id="outlined-basic"
          label="Search" 
          variant="outlined"
          name='city'
          type="text"
          placeholder="City..."
          onChange={handleInputChange}
          value={input}
          />
          <Button onClick={() => dispatch(clearPage())}
          variant="contained"
          type="submit">Search</Button>
        </Stack>
      </form>
    </div>
  );
};

export default SearchBar;
