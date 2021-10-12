import React, { useEffect } from "react";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import HouseCard from "../CityReservation/HouseCard";
import { getFavouriteId } from "../../redux/actions/favouriteActions";
import { getUserInfo } from "../../redux/actions/userActions";

const Favorite = () => {
  const dispatch = useDispatch();
  const { favourite } = useSelector((state) => state.favouriteReducer);
  const user = useSelector((state) => state.userReducer.details);
  console.log('favorties ', favourite)

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  useEffect(() => {
    if (user.id) {
        dispatch(getFavouriteId(user.id));
    } 
  }, [dispatch, user.id]);

  return (
    <div>
      <Header />
      <NavBar />
      <div>
        <h1>Favorite homes</h1>
        <ul>
          {favourite.length && favourite.map((e) => (
              <div key={e.id}>
                <li>
                  <Grid item>
                    <HouseCard
                      id={e.id}
                      title={e.title}
                      image={e.image}
                      country={e.country}
                      city={e.city}
                      points={e.points}
                      rating={e.rating}
                    />
                  </Grid>
                </li>
              </div>
            ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Favorite;
