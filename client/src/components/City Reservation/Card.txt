import React from 'react';
import { Link } from "react-router-dom";
import './Card.css';

export default function AnnouncementCard(props) {
  // acá va tu código
  const {id, owner, image, country, city} = props;
  return (
  <div className="card2">
    <Link to={`/Anuncio/${id}`}>
    <li className="list-item">
      <img width={100}src={image[0]} alt="No imagen"/>
      <div className="align">
  <h4 className="name">{owner}</h4>
  <h4>{country}</h4>
  <h4>{city}</h4>
  <h4>{points}</h4>
  </div>
    </li>
    </Link>
  </div>)
}; 