import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import miami from "../Photographs/miami.jpg";
import bali from "../Photographs/bali.jpg";
import paris from "../Photographs/paris.jpg";
import rome from "../Photographs/roma.jpg";
import moscow from "../Photographs/moscow.jpg";
import riodejaneiro from "../Photographs/riodejaneiro.jpg";
import Amsterdam from "../Photographs/Amsterdam.jpg";
import Reikiavik from "../Photographs/Reikiavik.jpg";
import "../Home/home.css";

const Home = () => {
  return (
    <div>
      <NavBar />
      <hr />
      <div className="cities">
        <p>
          <img src={miami} alt="miami" width="250em" height="200em" />
          <h3>Miami</h3>
        </p>
        <p>
          <img src={paris} alt="paris" width="250em" height="200em" />
          <h3>Paris</h3>
        </p>
        <p>
          <img src={bali} alt="bali" width="250em" height="200em" />
          <h3>Bali</h3>
        </p>
        <p>
          <img src={rome} alt="rome" width="250em" height="200em" />
          <h3>Rome</h3>
        </p>
        <p>
        <img src={riodejaneiro} alt="riodejaneiro" width="250em" height="200em"/>
        <h3>Rio de Janeiro</h3>
        </p>
        <p>
        <img src={moscow} alt="moscow" width="250em" height="200em" />
        <h3>Moscow</h3>
        </p>
        <p>
        <img src={Amsterdam} alt="Amsterdam" width="250em" height="200em" />
        <h3>Amsterdam</h3>
        </p>
        <p>
        <img src={Reikiavik} alt="Reikiavik" width="250em" height="200em" />
        <h3>Reikiavik</h3>
        </p>
      </div>
      <div className="places">
        <h3>Places you may like</h3>
      </div>
      <div className="sms">
        <h2>it's official... we're the best home swapping platform </h2>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
