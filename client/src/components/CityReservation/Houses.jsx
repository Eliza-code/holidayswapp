import React, { useEffect, useState } from "react";
import HouseCard from "./HouseCard.jsx";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import "./Houses.css";

export default function Houses() {
  const houses = useSelector((state) => state.postReducer.houses);

  const [currentPage, setCurrentPage] = useState(0);

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
    first_Page();
  }, [houses]);

  const filtredHouses = houses?.slice(currentPage, currentPage + 3);

  return (
    <div>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 0, mb: 2 }}
            spacing={3}
          >
            {filtredHouses?.map((e) => (
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
            ))}
          </Grid>
        </Grid>
      </Grid>
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
    </div>
  );
}
