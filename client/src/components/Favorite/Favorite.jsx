import React, { useState } from "react";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import HouseCard from "../CityReservation/HouseCard";

const Favorite = () => {
    
    const favourite = useSelector((state) => state.favouriteReducer.favourite); 
    return(
<div>
<Header/>
<NavBar/>
<div>
    <h1>favorite homes</h1>
    <ul>
        {
            favourite?.map((e)=>{
                return (
                    <div>
                        <li>
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
                        </li>
                    </div>
                )
            })
        }
    </ul>
</div>
<Footer/>
</div>
    )
}

export default Favorite