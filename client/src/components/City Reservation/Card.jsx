import React from 'react';
import { Link } from "react-router-dom";
import './Card.css';

export default function CountryCard(props) {
  // acá va tu código
  const {codigo, nombre, bandera, continente, activities} = props;
  return (
  <div className="card2">
    <Link to={`/Country/${codigo}`}>
    <li className="list-item">
      <img width={100}src={bandera} alt="No imagen"/>
      <div className="align">
  <h4 className="name">{nombre}</h4>
  <h4>{continente}</h4>
  <h4>{activities}</h4>
  </div>
    </li>
    </Link>
  </div>)
}; 