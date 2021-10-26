import React from "react";
import Footer from "../Footer/Footer";
import staff from "./staff";
import Employee from "./employee";
import "./about.css";
import Header from "../Header/Header";

const AboutUs = () => {
  return (
    <div className="containerAbout">
      <Header />
      <div>
        <div className="containPeople">
          <div className="gdoce">
            <h1 style={{ marginBottom: "-2%" }}>
              Staff - Group 12 - Soy Henry
            </h1>
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
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
