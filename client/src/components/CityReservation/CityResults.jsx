import React, { useEffect, useState } from "react";
import HouseCard from "./HouseCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import "./CityCards.css";
import NavBar from "../NavBar/NavBar.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import "./CityResults.css";
import { clearPage } from "../../redux/actions/postActions.js";
import { Grid } from "@mui/material";
import OrderByGpNigth from "./OrderByGpNight";
import OrderByRating from "./OrderbyRating";
import FilterBySleeps from "./FilterBySleeps";
import FilterByType from "./FilterByType";

const CityResults = () => {
  const houses = useSelector((state) => state.postReducer.searchResults);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
  const [order, setOrder] = useState("");

  const next_Page = () => {
    if (houses.length <= currentPage + 12) {
      setCurrentPage(currentPage);
    } else setCurrentPage(currentPage + 12);
  };
  const prev_Page = () => {
    if (currentPage < 13) {
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage - 12);
    }
  };
  const first_Page = () => {
    setCurrentPage(0);
  };
  const last_Page = () => {
    setCurrentPage(houses.length - 12);
  };
  useEffect(() => {
    first_Page();
    return () => dispatch(clearPage());
  }, [dispatch]);

  const filtredHouses = houses?.slice(currentPage, currentPage + 12);

  return (
    <div>
      <div className="headerNav">
        <Header />
        <NavBar />
      </div>
      <label>
        <FilterByType setCurrentPage={setCurrentPage} />
        <FilterBySleeps houses= {houses} setCurrentPage={setCurrentPage} />
        <OrderByRating setCurrentPage={setCurrentPage} setOrder={setOrder} />
        <OrderByGpNigth setCurrentPage={setCurrentPage} setOrder={setOrder} />
      </label>
      <div>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={12}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              sx={{ marginTop: 0, marginBottom: 2 }}
              spacing={3}
            >
              {filtredHouses ? (
                filtredHouses.map((e) => (
                  <Grid key={e.id} item>
                    <HouseCard
                      key={e.id}
                      id={e.id}
                      title={e.title}
                      image={e.image}
                      country={e.country}
                      city={e.city}
                      points={e.points}
                      rating={e.rating}
                    />
                  </Grid>
                ))
              ) : (
                <h1>There are not available homes in this location</h1>
              )}
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div>
        {filtredHouses?.length >= 3 ? (
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
        ) : null}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CityResults;
