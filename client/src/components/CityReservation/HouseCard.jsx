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
import {
  addAnnouncementFavourite,
  deleteFavourite,
  getFavourite,
} from "../../redux/actions/favouriteActions";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function HouseCard(props) {
  const { id, title, image, country, city, points, rating } = props;
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userReducer.isAuth);
  const userLog = useSelector((state) => state.userReducer.details);
  const favourites = useSelector((state) => state.favouriteReducer.favourite);

  const confirm = favourites.find((e) => e.announcementId === id);

  const [selectedIndex, setSelectedIndex] = React.useState(!!confirm);

  React.useEffect(() => {
    getFavourite();
  }, [dispatch]);

  const handleListItemClick = () => {
    if (selectedIndex === false) {
      dispatch(
        addAnnouncementFavourite({
          userId: userLog.id,
          announcementId: id,
        })
      );
    } else dispatch(deleteFavourite(confirm.id));
    setSelectedIndex(!selectedIndex);
  };

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
          noWrap={true}
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
            <Button onClick={() => handleListItemClick()}>
              {selectedIndex === true && <FavoriteIcon sx={{ height: 20 }} />}
              {selectedIndex === false && (
                <FavoriteBorderIcon sx={{ height: 20 }}></FavoriteBorderIcon>
              )}
            </Button>
          </>
        ) : null}
      </CardActions>
    </Card>
  );
}
