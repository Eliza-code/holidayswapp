import * as React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import StarIcon from '@mui/icons-material/Star';

export default function HouseCard(props) {
  const { id, title, image, country, city, points, rating } = props;

  return (
    <Card sx={{ width: 300 }}>
      <CardMedia
        component="img"
        sx={{ height: 250 }}
        image={image[Math.floor(Math.random() * (image.length - 1 - 0) + 0)]}
        alt={title}
      />
      <CardContent>
        <Typography textAlign="center" gutterBottom variant="h6" component="div">
          {title
            .split(" ")
            .map((elem) => elem[0].toUpperCase() + elem.substr(1).toLowerCase())
            .join(" ")}
        </Typography>
        <Stack direction="row" marginBottom={1} alignItems="center" spacing={1}>
          <LocationOnIcon sx={{ height: 20 }} />
          <Typography variant="subtitle1" color="text.primary">
            {country}
          </Typography>
        </Stack>
        <Stack direction="row" marginBottom={1} alignItems="center" spacing={1}>
          <LocationCityIcon sx={{ height: 20 }} />
          <Typography variant="body2" color="text.secondary">
            {city}
          </Typography>
        </Stack>
        <Stack direction="row" marginBottom={1} alignItems="center" spacing={1}>
          <MonetizationOnIcon sx={{ height: 20 }} />
          <Typography variant="body2" color="text.secondary">
            {points} GP/Night
          </Typography>
        </Stack>
        <Stack direction="row">
          {Array.from({ length: rating }, (_, i) => i).map((elem) => <StarIcon key={elem} />)}
        </Stack>
      </CardContent>
      <CardActions>
        <Button component={Link} to={`/announcements/${id}`} size="small">
          VIEW DETAILS
        </Button>
      </CardActions>
    </Card>
  );
}

// import React from 'react';
// import { Link } from "react-router-dom";
// import './HouseCard.css';

// export default function HouseCard(props) {
//   // acá va tu código
//   const {id, title, image, country,city, points } = props;
//   return (
//     <div className="cardContainer">
//       <Link to={`/announcements/${id}`}>
        
//           <img src={image[Math.floor(Math.random()*((image.length -1) - 0)+ 0)]} alt="No imagen" width="200em" height="200em"/>
//             <div className="align">
//               <h4 className="name">{title}</h4>
//               <h4>{country}</h4>  
//               <h4>{city}</h4>
//               <h4>{points} GP/Night</h4>
//         </div>
//       </Link>
//     </div>
//   )
// }; 