import React from "react";
import logoLinkedin from "./imgs/linkedin.png";
import logogithub from "./imgs/github.png";


export default function Employee({ name, job, linkedin, github, img }) {
  return (
    <div className="person">
      <div>
        <img src={img} alt="Y la Foto?" width="200em" height="200em" />
      </div>
      <div className="column">

      <h3>{name}</h3>
      <p style={{fontStyle: "italic",marginTop: "-5%"}}>{job}</p>
      <div className="logo">
      <a href={linkedin}>
        <img src={logoLinkedin} alt="logo" />
      </a>
      <a href={github}>
        <img src={logogithub} alt="logo" />
      </a>
      </div>
      </div>
    </div>
  );
}
