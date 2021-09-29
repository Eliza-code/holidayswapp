import React from 'react';
import { Link } from "react-router-dom";
import './Card.css';

export default function AnnouncementCard(props) {
  // acá va tu código
  const {id, Dueño, Ciudad, País, Rating, Puntos} = props;
  return (
  <div className="card2">
    <Link to={`/Anuncio/${id}`}>
    <li className="list-item">
      {/*<img width={100}src={image[0]} alt="No imagen"/>*/}
      <div className="align">
  <h4 className="name">{Dueño}</h4>
  <h4>{Ciudad}</h4>
  <h4>{País}</h4>
  <h4>{Rating}</h4>
  <h4>{Puntos}</h4>
  </div>
    </li>
    </Link>
  </div>)
}; 