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
import StarIcon from "@mui/icons-material/Star";
import { useDispatch, useSelector } from "react-redux";
import { addAnnouncementFavourite, deleteFavourite } from "../../redux/actions/favouriteActions";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function HouseCard(props) {
  const { id, title, image, country, city, points, rating } = props;
  const [selectedIndex, setSelectedIndex] = React.useState(false);

  const user = useSelector((state) => state.userReducer.isAuth);
  const userLog = useSelector((state) => state.userReducer.details);

  const dispatch = useDispatch();

  //const inFavorite = 

  React.useEffect(() => {  }, [dispatch]);
// hacer funcion q se ejecute en useeffect, esa funcion despacha el getallfavourite y comparar si el id del anuncio esta en favoritos.
   function addFavorite() {
    dispatch(
       addAnnouncementFavourite({
        userId: userLog.id,
        announcementId: id,
      })
    );
  }
  const handleListItemClick = async (event, index) => {
    setSelectedIndex(!index);
    if (selectedIndex === false) {
      console.log("soy verd");
      dispatch(addFavorite({
        userId: userLog.id,
        announcementId: id,
      }))
    } else if (selectedIndex === true) {
      console.log("soy falso");
      dispatch(deleteFavourite(id));
    }
  };
  console.log(selectedIndex)



  return (
    <Card sx={{ width: 300 }}>
      <CardMedia
        component="img"
        sx={{ height: 250 }}
        image={
          image && image[Math.floor(Math.random() * (image.length - 1 - 0) + 0)]
        }
        alt={title}
      />
      <CardContent>
        <Typography
          textAlign="center"
          gutterBottom
          variant="h6"
          component="div"
        >
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
          {Array.from({ length: rating }, (_, i) => i).map((elem) => (
            <StarIcon key={elem} />
          ))}
        </Stack>
      </CardContent>
      <CardActions>
        <Button
          component={Link}
          to={`/announcements/${id}`}
          size="small"
          onClick={() => window.scrollTo(0, 0)}
        >
          VIEW DETAILS
        </Button>
        {user ? (
          <>
           <Button
              
              onClick={(event) => handleListItemClick(event, selectedIndex)}
            >
              {selectedIndex === true && <FavoriteIcon sx={{ height: 20 }} />}
              {selectedIndex === false && <FavoriteBorderIcon sx={{ height: 20 }}></FavoriteBorderIcon> } 
            </Button>

            {/* <Button>
          onClick={() =>
              deleteFavorite()
            }
          >
            <CancelIcon sx={{ height: 20 }} />
          </Button> */}
          </>
        ) : null}
      </CardActions>
    </Card>
  );
}
