import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getHouses } from "../../redux/actions/userActions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [word, setWord] = useState("");

  function handleImputChange(event) {
    event.preventDefault();
    setWord(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (word !== "") {
      dispatch(getHouses(word));
      setWord("");
    } else {
      alert("Ingrese una ciudad o pais");
    }
  }

  function handleKeyDown(event) {
    event.preventDefault();
    dispatch(getHouses(word));
    setWord("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="city or country..."
        value={word}
        onChange={(event) => handleImputChange(event)}
        onKeyPress={(event) => {
          if (event.key === "Enter") handleKeyDown(event);
        }}
      />
      <button type="submit" onClick={(event) => handleSubmit(event)}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
