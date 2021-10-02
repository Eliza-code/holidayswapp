import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import "../NavBar/navbar.css";


const NavBar = () => {
  return (
    <div>
      <div className="titulo">
        <h1>The HolidaySwApp</h1>
        <h4>SwApping Dreams</h4>
      </div>
      <div className="items">
      <div>
        <SearchBar />
      </div>
      <div>
        <Link>
          <h4>about us</h4>
        </Link>
      </div>
      <div className="botoncitos">
      <Link to="/singin">
         <button> Sign In </button>
      </Link>
      <Link to="/register">
         <button> Create Account </button>
      </Link>
      </div>
      </div>
    </div>
  );
};

export default NavBar;
