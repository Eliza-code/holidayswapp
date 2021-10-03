import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getHouseCity } from "../../redux/actions/postActions";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { turisticCities } from "./turisticCities";
import Announcements from "../CityReservation/Announcements";
import "../Home/home.css";
import Statics from "./statics";

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOnClick = (e, name) => {
    e.preventDefault();
    dispatch(getHouseCity(name.trim()));
    history.push(`/announcements/${name}`);
  };

  return (
    <div>
      <NavBar/>
      <div className="cities">
        {turisticCities.map((el) => {
          return (
            <div key={el.id} className="cityCard">
              <img src={el.image} alt="city" width="300em" height="250em" />
              <button onClick={(e) => handleOnClick(e, el.name)}>
                {el.name}
              </button>
            </div>
          );
        })}
      </div>
      <div className="places">
        <h3>Places you may like</h3>
      </div>
      <div>
        <Announcements />
      </div>
      <div>
        <Statics />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
