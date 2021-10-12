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
  const userId = useSelector((state) => state.userReducer.details.id);
  console.log('favorties ', favourite)

    useEffect(() => {
        if (userId) return dispatch(getFavouriteId(userId))
        console.log(userId);
      }, [userId]);
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

 

export default Favorite;
