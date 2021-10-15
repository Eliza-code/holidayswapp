import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import HouseCard from "../CityReservation/HouseCard";
import { getFavouriteId } from "../../redux/actions/favouriteActions";
import { getUserInfo } from "../../redux/actions/userActions";
import "../Home/home.css";


const Favorite = () => {
  const dispatch = useDispatch();
  const favourite = useSelector((state) => state.favouriteReducer.favourite);
  const userId = useSelector((state) => state.userReducer.details.id);
  const actFav = useSelector((state) => state.favouriteReducer.actionFavourite);

  const [ChangeFav, setChangeFav] = useState(0);

  useEffect(() => {
    dispatch(getUserInfo());
    if (ChangeFav !== actFav) setChangeFav(actFav)
    // eslint-disable-next-line
  }, [actFav]);

  useEffect(() => {
    if (userId) return dispatch(getFavouriteId(userId));    
    // eslint-disable-next-line
  }, [userId]);

  const [currentPage, setCurrentPage] = useState(0);

  const next_Page = () => {
    if (favourite.length <= currentPage + 3) {
      setCurrentPage(currentPage);
    } else setCurrentPage(currentPage + 3);
  };
  const prev_Page = () => {
    if (currentPage < 4) {
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage - 3);
    }
  };
  const first_Page = () => {
    setCurrentPage(0);
  };
  const last_Page = () => {
    setCurrentPage(favourite.length - 3);
  };
  useEffect(() => {
    first_Page();
  }, [favourite]);

  const filterFavorite = favourite?.slice(currentPage, currentPage + 3);

  return (
    <div className="headerNav">
      <Header />
      <NavBar />
      <div>
        <h1>Favorite Home</h1>
        <Grid sx={{ flexGrow: 1 }} >
          <Grid item xs={12}>
            <Grid
              container                
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
              spacing={2}
              sx={{ marginTop: 0, marginBottom: 2 }}
            >
              {filterFavorite ? (
                filterFavorite?.map((e) => {
                  return (
                    <div>
                      <Grid key={e.id} item>
                        <HouseCard
                          key={e.announcement.id}
                          id={e.announcement.id}
                          title={e.announcement.title}
                          image={e.announcement.image}
                          country={e.announcement.country}
                          city={e.announcement.city}
                          points={e.announcement.points}
                          rating={e.announcement.rating}
                        />
                      </Grid>
                    </div>
                  );
                })
              ) : (
                <h1>You have not added homes to favorites yet</h1>
              )}
            </Grid>
          </Grid>
        </Grid>

        <div>
          {
            filterFavorite.length === 0? null :
            filterFavorite?.length >= 3 ? (
            <div className="arrow">
              <button className="button" onClick={first_Page}>
                {" "}
                {"<<"}
              </button>
              <button className="button" onClick={prev_Page}>
                {" "}
                {"<"}
              </button>
              <button className="button" onClick={next_Page}>
                {" "}
                {">"}
              </button>
              <button className="button" onClick={last_Page}>
                {" "}
                {">>"}
              </button>
            </div>
          ) : (
          <div className="arrow">
            <button className="button" onClick={first_Page}>
              {" "}
              {"<<"}
            </button>
            <button className="button" onClick={prev_Page}>
              {" "}
              {"<"}
            </button>
          </div>
        )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Favorite;


