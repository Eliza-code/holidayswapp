import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import staff from "./staff";
import Employee from "./employee";
import './about.css'

const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <hr />
      <div>
        <Link to="/">
          <button>HOME</button>
        </Link>
      </div>
      <div className="peoples">

      {staff.map((element)=>{
          return (
              <Employee
              name ={element.name}
                img={element.img}
                job={element.job}
                linkedin={element.linkedin}
                github={element.github}
              />
          )
      })}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
