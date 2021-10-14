import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getHouseCity } from "../../redux/actions/postActions";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { turisticCities } from "./turisticCities";
import Announcements from "../CityReservation/Announcements";
import "../Home/home.css";
import Statics from "./statics";
import { getUserInfo } from "../../redux/actions/userActions";

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  React.useEffect(() => {
    dispatch(getUserInfo())
  }, [dispatch])
  const handleOnClick = (e, name) => {
    e.preventDefault();
    dispatch(getHouseCity(name.trim()));
    history.push(`/announcements/city/${name}`);
  };

  return (
    <div>
      <div className="headerNav">
        <Header/>
        <NavBar />
      </div>
      <div className="citiesCards">
        {turisticCities.map((el, i) => (
            <div key={i} className="cityCard">
              <img src={el.image} alt="city" />
              <button onClick={(e) => handleOnClick(e, el.name)}>
                {el.name}
              </button>
            </div>
        ))}
      </div>
      <div className="places">
        <h2>Places you may like</h2>
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
