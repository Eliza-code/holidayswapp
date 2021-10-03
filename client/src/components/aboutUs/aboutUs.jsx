import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import staff from "./staff";
import Employee from "./employee";
import "./about.css";

const AboutUs = () => {
  return (
    <div>
      <NavBar />            
      <div className="gdoce">
        <h1 style={{ marginBottom: "-2%" }}>Staff</h1>
        <h2>Grouop 12 - Soy Henry</h2>
      </div>
      <div className="peoples">
        {staff.map((element) => {
          return (
            <Employee
              name={element.name}
              img={element.img}
              job={element.job}
              linkedin={element.linkedin}
              github={element.github}
            />
          );
        })}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
