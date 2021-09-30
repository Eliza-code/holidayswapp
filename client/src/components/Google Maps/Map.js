import React  from "react";
import  Map  from "./New Google";
import credentials from "./credentials";

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.46.exp&key=${credentials.mapsKey}`;


export default function Google() {
    return (
      <div>
        <Map
        googleMapURL = {mapURL}
        containerElement={<div style={{height: '400px'}}/>}
        mapElement={<div style={{height: '100%'}}/>}
        loadingElement={<p>Loading...</p>}
        />
        </div>
    )
}