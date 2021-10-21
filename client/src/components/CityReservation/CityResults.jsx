import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearPage, getHouseCity } from "../../redux/actions/postActions.js";
import HouseCard from "./HouseCard.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import OrderByGpNigth from "./OrderByGpNight";
import OrderByRating from "./OrderbyRating";
import FilterBySleeps from "./FilterBySleeps";
import FilterByType from "./FilterByType";
import Grid from "@mui/material/Grid";
import "./CityCards.css";
import "./CityResults.css";

const CityResults = (props) => {
  const dispatch = useDispatch();
  const cityName = props.location.pathname.split("/").pop();
  const houses = useSelector((state) => state.postReducer.searchResults);
  const [currentPage, setCurrentPage] = useState(0);
  // eslint-disable-next-line
  const [order, setOrder] = useState("");

  const next_Page = () => {
    if (houses.length <= currentPage + 3) {
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
    setCurrentPage(houses.length - 3);
  };
  
  useEffect(() => {
    dispatch(getHouseCity(cityName));
    first_Page();
    return () => dispatch(clearPage());
  }, [dispatch, cityName]);

  const filtredHouses = houses?.slice(currentPage, currentPage + 3);

  return (
    <div>
      <div className="headerNav">
        <Header />
        <NavBar />
      </div>

      <Grid
        container
        direction="row"
        justifyContent="center"
        gap={4}
        alignItems="center"
      >
        <FilterByType setCurrentPage={setCurrentPage} setOrder={setOrder} />
        <FilterBySleeps setCurrentPage={setCurrentPage} setOrder={setOrder} />
        <OrderByRating setCurrentPage={setCurrentPage} setOrder={setOrder} />
        <OrderByGpNigth setCurrentPage={setCurrentPage} setOrder={setOrder} />
      </Grid>

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
        {houses?.length <= 3 ? null : houses?.length > 3 ? (
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
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CityResults;
