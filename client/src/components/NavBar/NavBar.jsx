import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div>
        <h1>The HolidaySwApp</h1>
        <h3>SwApping Dreams</h3>
      </div>
      <div>
        <SearchBar />
      </div>
      <div>
        <Link>
          <h4>about us</h4>
        </Link>
      </div>
      <button>
          Sing In
      </button>
      <button>
          Create Account
      </button>
    </div>
  );
};

export default NavBar;
