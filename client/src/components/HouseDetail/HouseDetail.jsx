import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getHouseID } from "../../redux/actions/postActions";
import Footer from "../Footer/Footer";

import "./HouseDetail.css";
import Announcements from "../CityReservation/Announcements";
import Header from "../Header/Header";

import House from "../HouseDetail/img/House.jpeg";
import body from "../HouseDetail/img/body.png";
import Beds from "../HouseDetail/img/Beds.jpeg";
import Rooms from "../HouseDetail/img/Rooms.jpeg";
import Bathrooms from "../HouseDetail/img/Bathrooms.jpeg";
import Window from "../HouseDetail/img/Window.jpeg";

import Wifi from "../HouseDetail/img/Wifi.jpeg";
import Tele from "../HouseDetail/img/Tele.jpeg";
import wind from "../HouseDetail/img/wind.png";
import Parking from "../HouseDetail/img/Parking.jpeg";
import Fridge from "../HouseDetail/img/Fridge.jpeg";

import Diswasher from "../HouseDetail/img/Diswasher.jpeg";

import cigar from "../HouseDetail/img/cigar.png";
import catIcon from "../HouseDetail/img/catIcon.jpg";
import teddybear from "../HouseDetail/img/teddybear.jpg";

import UserDetails from "../userDetails/UserDetail";

export default function HomeID() {
  const homeDetailed = useSelector((state) => state.postReducer.homeInfo); //userReducer.homeInfo
  const dispatch = useDispatch();
  const { id } = useParams();  
  useEffect(() => {
    dispatch(getHouseID(id));
  }, [dispatch, id]);
  console.log(id);
  console.log(homeDetailed, "Detalle del Hogar");
  return (
    <div>
      <div className="headerNav">
        <Header />
      </div>
      {/* <div>
        <NavBar />
      </div> */}
      <div>
        {homeDetailed ? (
          <div>
            <Link to={`/user/getUser/${homeDetailed.id}`}>
              <h1>{homeDetailed.title}</h1>
            </Link>
            <div className="pictures">
              {homeDetailed.image?.map((e) => {
                return (
                  <div>
                    <img src={e} alt="img" width="350em" height="300em" />
                  </div>
                );
              })}
              
            </div>
            <hr />
            <div className="icoUno">
              <div>
                <img src={House} alt="ico" />
                <h5>{homeDetailed.type}</h5>
              </div>
              <div>
                <img src={body} alt="ico" />
                <h5>Sleeps {homeDetailed.sleeps}</h5>
              </div>
              <div>
                <img src={Beds} alt="ico" />
                <h5>{homeDetailed.beds} beds</h5>
              </div>
              <div>
                <img src={Rooms} alt="ico" />
                <h5>{homeDetailed.bedrooms} bedrooms</h5>
              </div>
              <div>
                <img src={Bathrooms} alt="ico" />
                <h5>{homeDetailed.bathrooms} bathrooms</h5>
              </div>
              <div>
                <img src={Window} alt="ico" />
                <h5>{homeDetailed.surfaceM2} m2</h5>
              </div>
            </div>
            <div className="descr">
              <hr />
              <h2>Description</h2>
              <h3>{`${homeDetailed.description}`}</h3>
              <hr />
              <h2>Amenities</h2>
              <div className="Amenities">
                <div>
                  <img src={Wifi} alt="ico" />
                  <h5>{homeDetailed.wifi ? "Yes" : "No"}</h5>
                </div>
                <div>
                  <img src={Tele} alt="ico" />
                  <h5>{homeDetailed.tv ? "Yes" : "No"}</h5>
                </div>
                <div>
                  <img src={wind} alt="ico" />
                  <h5>{homeDetailed.a_c ? "Yes" : "No"}</h5>
                </div>
                <div>
                  <img src={Parking} alt="ico" />
                  <h5>{homeDetailed.private_parking ? "Yes" : "No"}</h5>
                </div>
                <div>
                  <img src={Fridge} alt="ico" />
                  <h5>{homeDetailed.fridge ? "Yes" : "No"}</h5>
                </div>
                <div>
                  <img src={Diswasher} alt="ico" />
                  <h5>{homeDetailed.washing_machine ? "Yes" : "No"}</h5>
                </div>
              </div>
              <hr />
              <h2>House rules</h2>
              <div className="houserules">
                <div>
                  <img src={cigar} alt="ico" />
                  <h5>{homeDetailed.smokersWelcome ? "Yes" : "No"}</h5>
                </div>
                <div>
                  <img src={catIcon} alt="ico" />
                  <h5>{homeDetailed.petsWelcome ? "Yes" : "No"}</h5>
                </div>
                <div>
                  <img src={teddybear} alt="ico" />
                  <h5>{homeDetailed.childremWelcome ? "Yes" : "No"}</h5>
                </div>
              </div>
              <hr />
            </div>
          </div>
        ) : (
          "no hay nada"
        )}
      </div>
      <div className="places">
        <h2>Places you may like</h2>
      </div>
      <div>
        <Announcements />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
