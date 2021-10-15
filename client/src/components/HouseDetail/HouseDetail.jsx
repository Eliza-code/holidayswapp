import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { getHouseID } from "../../redux/actions/postActions";
import Carousel from "../HouseDetail/Carousel";
import Footer from "../Footer/Footer";
import OwnerDetails from "./OwnerDetail";
import Header from "../Header/Header";
import "./HouseDetail.css";
import Reviews from "../Reviews/Reviews";

import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import WifiIcon from "@mui/icons-material/Wifi";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import KitchenIcon from "@mui/icons-material/Kitchen";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import SmokingRoomsIcon from "@mui/icons-material/SmokingRooms";
import PetsIcon from "@mui/icons-material/Pets";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import Button from "@mui/material/Button";

export default function HomeID() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const homeDetailed = useSelector((state) => state.postReducer.homeInfo); //userReducer.homeInfo
  
  const handleBook = () => {
    window.localStorage.setItem("currentPost", JSON.stringify(id));
    history.push("/booking")
  }
  console.log(homeDetailed.id,"ID que me llevo")
  useEffect(() => {
    dispatch(getHouseID(id));
  }, [dispatch, id]);

  return (
    <div>
      <div className="headerNav">
        <Header />
      </div>
      {Object.keys(homeDetailed).length ? (
        <Grid>
          <Typography
            textAlign="center"
            variant="h2"
            component="div"
            mt={5}
            mb={7}
          >
            {homeDetailed.title
              .split(" ")
              .map(
                (elem) => elem[0].toUpperCase() + elem.substr(1).toLowerCase()
              )
              .join(" ")}
          </Typography>
          <Grid container justifyContent="center">
            {/* Carousel and owner card */}
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={5}>
                <Grid item xs={6}>
                  <Carousel width="100vw" images={homeDetailed.image} />
                </Grid>
                <Grid item>
                  <Grid container flexDirection="column">
                    <OwnerDetails ownerId={homeDetailed.userId} />
                    <Button variant="contained" onClick={handleBook}>
                      Book Now!
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* Description */}
            <Grid item xs={8} m={8}>
              <Grid>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  divider={<Divider orientation="vertical" flexItem />}
                >
                  <Typography variant="h6" color="text.primary">
                    Description
                  </Typography>
                  <Typography> {homeDetailed.description} </Typography>
                </Stack>
                <hr />
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                  divider={<Divider orientation="vertical" flexItem />}
                >
                  <Typography variant="h6" color="text.primary">
                    Available Dates
                  </Typography>
                  <Typography>
                    {" "}
                    {homeDetailed.arrivealDate} to {homeDetailed.departureDate}{" "}
                  </Typography>
                </Stack>
                <hr />
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                  divider={<Divider orientation="vertical" flexItem />}
                >
                  <Typography variant="h6" color="text.primary">
                    Address
                  </Typography>
                  <Typography> {homeDetailed.adress} </Typography>
                </Stack>
                <hr />
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                  divider={<Divider orientation="vertical" flexItem />}
                >
                  <Typography>
                    {" "}
                    {homeDetailed.city}, {homeDetailed.country}{" "}
                  </Typography>
                </Stack>
                <hr />
                <Stack
                  direction="row"
                  justifyContent="space-evenly"
                  spacing={3}
                >
                  <Stack
                    direction="column"
                    marginBottom={1}
                    alignItems="center"
                    spacing={1}
                  >
                    <HomeWorkIcon sx={{ height: 40 }} />
                    <Typography> {homeDetailed.type} </Typography>
                  </Stack>
                  <Stack
                    direction="column"
                    marginBottom={1}
                    alignItems="center"
                    spacing={1}
                  >
                    <BedroomParentIcon sx={{ height: 40 }} />
                    <Typography> {homeDetailed.beds} Beds </Typography>
                  </Stack>
                  <Stack
                    direction="column"
                    marginBottom={1}
                    alignItems="center"
                    spacing={1}
                  >
                    <EmojiPeopleIcon sx={{ height: 40 }} />
                    <Typography> {homeDetailed.sleeps} Sleeps </Typography>
                  </Stack>
                  <Stack
                    direction="column"
                    marginBottom={1}
                    alignItems="center"
                    spacing={1}
                  >
                    <MeetingRoomIcon sx={{ height: 40 }} />
                    <Typography> {homeDetailed.bedrooms} Bedrooms </Typography>
                  </Stack>
                  <Stack
                    direction="column"
                    marginBottom={1}
                    alignItems="center"
                    spacing={1}
                  >
                    <BathtubIcon sx={{ height: 40 }} />
                    <Typography>
                      {" "}
                      {homeDetailed.bathrooms} Bathrooms{" "}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="column"
                    marginBottom={1}
                    alignItems="center"
                    spacing={1}
                  >
                    <SquareFootIcon sx={{ height: 40 }} />
                    <Typography> {homeDetailed.surfaceM2} M2 </Typography>
                  </Stack>
                </Stack>
                <hr />
                <Stack
                  alignItems="center"
                  direction="row"
                  justifyContent="space-evenly"
                  spacing={3}
                >
                  <Typography variant="h6" color="text.primary">
                    Amenities:
                  </Typography>
                  <Stack
                    direction="column"
                    marginBottom={1}
                    alignItems="center"
                    spacing={1}
                  >
                    <WifiIcon sx={{ height: 40 }} />
                    <Typography>
                      {" "}
                      {homeDetailed.wifi ? "Yes" : "No"}{" "}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="column"
                    marginBottom={1}
                    alignItems="center"
                    spacing={1}
                  >
                    <ConnectedTvIcon sx={{ height: 40 }} />
                    <Typography>{homeDetailed.tv ? "Yes" : "No"} </Typography>
                  </Stack>
                  <Stack
                    direction="column"
                    marginBottom={1}
                    alignItems="center"
                    spacing={1}
                  >
                    <AcUnitIcon sx={{ height: 40 }} />
                    <Typography>{homeDetailed.a_c ? "Yes" : "No"} </Typography>
                  </Stack>
                  <Stack
                    direction="column"
                    marginBottom={1}
                    alignItems="center"
                    spacing={1}
                  >
                    <DirectionsCarIcon sx={{ height: 40 }} />
                    <Typography>
                      {homeDetailed.private_parking ? "Yes" : "No"}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="column"
                    marginBottom={1}
                    alignItems="center"
                    spacing={1}
                  >
                    <KitchenIcon sx={{ height: 40 }} />
                    <Typography>
                      {homeDetailed.fridge ? "Yes" : "No"}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="column"
                    marginBottom={1}
                    alignItems="center"
                    spacing={1}
                  >
                    <DryCleaningIcon sx={{ height: 40 }} />
                    <Typography>
                      {homeDetailed.washing_machine ? "Yes" : "No"}
                    </Typography>
                  </Stack>
                </Stack>
                <hr />
                <Stack
                  alignItems="center"
                  direction="row"
                  justifyContent="space-evenly"
                  spacing={3}
                >
                  <Typography variant="h6" color="text.primary">
                    House rules:
                  </Typography>
                  <Stack
                    direction="column"
                    marginBottom={1}
                    alignItems="center"
                    spacing={1}
                  >
                    <SmokingRoomsIcon sx={{ height: 40 }} />
                    <Typography>
                      {homeDetailed.smokersWelcome ? "Yes" : "No"}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="column"
                    marginBottom={1}
                    alignItems="center"
                    spacing={1}
                  >
                    <PetsIcon sx={{ height: 40 }} />
                    <Typography>
                      {homeDetailed.petsWelcome ? "Yes" : "No"}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="column"
                    marginBottom={1}
                    alignItems="center"
                    spacing={1}
                  >
                    <ChildFriendlyIcon sx={{ height: 40 }} />
                    <Typography>
                      {homeDetailed.childremWelcome ? "Yes" : "No"}
                    </Typography>
                  </Stack>
                </Stack>
                <hr />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <CircularProgress />
      )}
      <Grid>
        <Reviews announcementId={homeDetailed.id} />
      </Grid>
      <div>
        <Footer />
      </div>
    </div>
  );
}
