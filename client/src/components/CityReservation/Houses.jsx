import React, { useEffect, useState } from 'react';
import HouseCard from './HouseCard.jsx';
import { useSelector } from 'react-redux';
import "./CityCards.css"

export default function Houses() {
    const houses = useSelector((state) => state.userReducer.home);
    const [currentPage, setCurrentPage] = useState(0);
    
    const next_Page = () => {
        if(houses.length <= currentPage + 10) {
            setCurrentPage(currentPage);
        } else setCurrentPage(currentPage + 10);
    };
    const prev_Page = () => {
        if (currentPage < 9) {
            setCurrentPage(0);
        } else {
            setCurrentPage(currentPage - 10);
        }
    };
    const first_Page = () => {
        setCurrentPage(0);
    };
    const last_Page = () => {
        setCurrentPage(houses.length - 10)
    };
    useEffect(() => {
        first_Page()
    }, [houses]);
    console.log(houses)

const filtredHouses = houses?.slice(currentPage, currentPage + 10);
console.log(filtredHouses)

return (
    <div>
        {filtredHouses?.length >= 10 ? (
            <div>
        <button className="button" onClick={first_Page}> {"<<"}</button>
        <button className="button" onClick={prev_Page}> {"<"}</button>
        <button className="button" onClick={next_Page}> {">"}</button>
        <button className="button" onClick={last_Page}> {">>"}</button>
        </div>
        ): null}
        <div className="grid">
        {filtredHouses?.map((e)  => (
        <HouseCard
        id = {e.id}
        title = {e.title}
        image = {e.image}
        country = {e.country}
        state = {e.state}
        city = {e.city}
        />
        ))}
      </div>
    </div>
)
}