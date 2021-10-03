import React, { useEffect, useState } from 'react';
import HouseCard from './HouseCard.jsx';
import { useSelector } from 'react-redux';
import "./CityCards.css"
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar.jsx';
import Footer from '../Footer/Footer.jsx';

const CityResults = () => {
    const houses = useSelector((state) => state.postReducer.searchResults);
    
    const [currentPage, setCurrentPage] = useState(0);
    
    const next_Page = () => {
        if(houses.length <= currentPage + 3) {
            setCurrentPage(currentPage);
        } else setCurrentPage(currentPage + 3);
    };
    const prev_Page = () => {
        if (currentPage < 4) {
            setCurrentPage(0);
        } else {
            setCurrentPage(currentPage - 3);
        }
    };
    const first_Page = () => {
        setCurrentPage(0);
    };
    const last_Page = () => {
        setCurrentPage(houses.length - 3)
    };
    useEffect(() => {
        first_Page()
    }, [houses]);
    console.log(houses)

    const filtredHouses = houses?.slice(currentPage, currentPage + 3);
    console.log(filtredHouses)

    return (
        <div>
            <div>
                <NavBar/>
            </div>
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
            <div>
            {filtredHouses?.length >= 3 ? (
                <div className="arrow">
            <button className="button" onClick={first_Page}> {"<<"}</button>
            <button className="button" onClick={prev_Page}> {"<"}</button>
            <button className="button" onClick={next_Page}> {">"}</button>
            <button className="button" onClick={last_Page}> {">>"}</button>
            </div>
            ): null}
        </div>
        <div>
            <Footer/>
        </div>
        </div>
    )
}

export default CityResults;;