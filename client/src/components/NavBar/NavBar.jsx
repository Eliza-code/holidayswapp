import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; 
import SearchBar from "../SearchBar/SearchBar";
import "../NavBar/navbar.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AccountMenu from "./AccountMenu";

const NavBar = () => {

  const { isAuth } = useSelector((state) => state.userReducer)

  return (
    <div className="items">
      <div>
        <SearchBar />
      </div>
      <div>
        <Button
          component={Link}
          to="/aboutus"
          sx={{ height: 50 }}
          type="submit"
        >
          About us
        </Button>
      </div>
      {isAuth ? (
        <AccountMenu  />
      ) : (
        <div className="Buttoms">
          <Stack direction="row" spacing={1}>
            <Button
              component={Link}
              to="/signin"
              sx={{ height: 50 }}
              variant="contained"
              type="submit"
            >
              Sign In
            </Button>

            <Button
              component={Link}
              to="/register"
              sx={{ height: 50 }}
              variant="contained"
              type="submit"
            >
              Sign Up
            </Button>
          </Stack>
        </div>
      )}
    </div>
  );
};

export default NavBar;
