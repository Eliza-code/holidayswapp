import React from 'react';
import { Link } from "react-router-dom";
import './Card.css';

export default function AnnouncementCard(props) {
  // acá va tu código
  const {id, Owner, Image, City, Country, Rating, Points} = props;
  return (
  <div className="card2">
    <Link to={`/Anuncio/${id}`}>
    <li className="list-item">
      <img width={100}src={Image} alt="No imagen"/>
      <div className="align">
  <h4 className="name">{Owner}</h4>
  <h4>{City}</h4>
  <h4>{Country}</h4>
  <h4>{Rating}</h4>
  <h4>{Points}</h4>
  </div>
    </li>
    </Link>
  </div>)
}; 