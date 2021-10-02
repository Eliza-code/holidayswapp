import React from 'react';
import { Link } from "react-router-dom";
import './HouseCard.css';

export default function HouseCard(props) {
  // acá va tu código
  const {id, title, image, country,city, points } = props;
  return (
  <div className="card2">
    <Link to={`/house/${id}`}>
    <li className="list-item">
      <img src={image[Math.floor(Math.random()*((image.length -1) - 0)+ 0)]} alt="No imagen" width="200em" height="200em"/>
      <div className="align">
  <h4 className="name">{title}</h4>
  <h4>{country}</h4>  
  <h4>{city}</h4>
  <h4>{points} GP/Night</h4>
  </div>
    </li>
    </Link>
  </div>)
}; 