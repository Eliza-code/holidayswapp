import React, { useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import "../NavBar/navbar.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AccountMenu from "./AccountMenu";
import { isAuthenticated } from "../../utils/isAuth";

//const user = { username: "Eli", profilePicture: null };

const NavBar = () => {
  const [isLogged, setIsLogged] = React.useState(false);
  console.log(isLogged)

  const user = window.localStorage.getItem("userInfo");
  console.log("USER INFO --> ", JSON.parse(user))

  useEffect(() => {
    isAuthenticated.then((res)=>setIsLogged(res))
  }, []);

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
      {isLogged ? (
        <AccountMenu user={user} />
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
