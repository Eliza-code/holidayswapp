import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux";
import { getHouseCity } from "../../redux/actions/postActions";

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
    history.push(`/announcements/${input}`);
  }

  return (
    <div className='search'>
      <form onSubmit={handleSubmit}>
          <input
            className='searchInput'
            required
            name='city'
            type="text"
            placeholder="City..."
            onChange={handleInputChange}
            value={input}            
          />
          <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
