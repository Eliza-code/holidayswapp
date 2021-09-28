import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";

export default function Header(props) {
    const {codigo} = props;
    return (
        <div>
            <header>
                <Link to={`/Ciudad/${codigo}`}>
                <h1 className="h6">Maxi por fa no me mates. Header de prueba</h1>
                </Link>
            </header>
        </div>
    )
}