import React, { useEffect, useState } from 'react';
import HouseCard from './HouseCard.jsx';
import { useSelector } from 'react-redux';
import "./CityCards.css"
import { Link } from 'react-router-dom';

export default function Houses() {
    const houses = useSelector((state) => state.postReducer.houses);
    
    const [currentPage, setCurrentPage] = useState(0);
    
    const next_Page = () => {
        if(houses.length <= currentPage + 12) {
            setCurrentPage(currentPage);
        } else setCurrentPage(currentPage + 12);
    };
    const prev_Page = () => {
        if (currentPage < 9) {
            setCurrentPage(0);
        } else {
            setCurrentPage(currentPage - 12);
        }
    };
    const first_Page = () => {
        setCurrentPage(0);
    };
    const last_Page = () => {
        setCurrentPage(houses.length - 12)
    };
    useEffect(() => {
        first_Page()
    }, [houses]);
    console.log(houses)

const filtredHouses = houses?.slice(currentPage, currentPage + 12);
console.log(filtredHouses)

return (
    <div>
        {filtredHouses?.length >= 12 ? (
            <div className="arrow">
            <Link to="/">
          <button className="button">HOME</button>
        </Link>
        <button className="button" onClick={first_Page}> {"<<"}</button>
        <button className="button" onClick={prev_Page}> {"<"}</button>
        <button className="button" onClick={next_Page}> {">"}</button>
        <button className="button" onClick={last_Page}> {">>"}</button>
        </div>
        ): null}
        <div className="grid">
        {filtredHouses?.map((e)  => (
        <HouseCard
        key={e.id}
        id = {e.id}
        title = {e.title}
        image = {e.image}
        country = {e.country}        
        city = {e.city}
        points = {e.points}
        />
        ))}
      </div>
    </div>
)
}