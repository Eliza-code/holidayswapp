import { React, useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Alert,
  Grid,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import CancelIcon from "@mui/icons-material/Cancel";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { updateOrderStatus } from "../../redux/actions/bookingActions";
import { getOwnerDetails } from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { red } from "@mui/material/colors";

// for reviews
import Dialog from "@mui/material/Dialog";
import ReviewForm from "../Reviews/ReviewForm";
import { orderByPoints } from "../../redux/actions/postActions";

const useStyles = makeStyles((theme) => ({
  root:{
    alignItems:"center",
    alignContent:"center"
  },
  divider: {},
  buttons: {
    justifyContent: "space-around",
  },
  cards: {
    margin: "20px 30px",
  },
  accepted: {
    backgroundColor: "#0063cc",
  },
}));

const CardOrder = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  //  const userInf = useSelector(state => state.state)
  // console.log(props,"que props tengo")
  const { orders, userInfo, type } = props;
  // console.log(orders,"mis ordenes")
  // console.log(props.userInfo.profilePicture,"mifoto")

  // console.log(type,"tipo de card")

  const handleOnclik = (newStatus, orderId) => {
    const data = { newStatus, orderId };
    // console.log(data)
    dispatch(updateOrderStatus(data));
    window.location.reload(true);
  };
  useEffect(() => {
    if (userInfo === false) {
      dispatch(getOwnerDetails(orders.userId));
    }
  }, []);

  // reviews
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const userInfo2 = useSelector((state) => state.userReducer.ownerDetails);
  console.log(userInfo2, "mi usuario real");

  return (
    <Card className={classes.cards} sx={{ maxWidth: 200 }}>
      <CardMedia
        component="img"
        height="140"
        image={
          userInfo === false
            ? userInfo2.profilePicture
            : userInfo.profilePicture
        }
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {userInfo === false ? userInfo2.username : userInfo.username}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          {orders.description}
        </Typography>

        {orders.status === "Pending" && (
          <Alert severity="success">{orders.status}</Alert>
        )}
        {orders.status === "Accepted" && (
          <Alert severity="info">{orders.status}</Alert>
        )}
        {orders.status === "Cancelled" && (
          <Alert severity="error">{orders.status}</Alert>
        )}
        {orders.status === "Completed" && (
          <Alert severity="warning">{orders.status}</Alert>
        )}
      </CardContent>
      <CardActions className={classes.buttons}>
        <Grid className={classes.buttons}>
          {type === "sent" && orders.status !== "Completed" && (
            <>
              <IconButton
                aria-label=""
                onClick={() => handleOnclik("Cancelled", orders.id)}
              >
                <CancelIcon></CancelIcon>
              </IconButton>
              <IconButton
                aria-label=""
                onClick={() => handleOnclik("Completed", orders.id)}
              >
                <ThumbUpAltIcon></ThumbUpAltIcon>
              </IconButton>
            </>
          )}

          {type === "received" && orders.status !== "Completed" && (
            <>
              <IconButton
                aria-label=""
                onClick={() => handleOnclik("Cancelled", orders.id)}
              >
                <CancelIcon></CancelIcon>
              </IconButton>

              <IconButton
                aria-label=""
                onClick={() => handleOnclik("Accepted", orders.id)}
              >
                <CheckCircleIcon></CheckCircleIcon>
              </IconButton>
            </>
          )}
        </Grid>
        {orders?.status === "Completed" && (
        <Grid container>
          <Grid item >
             <Button size="small" variant="contained" onClick={handleOpen}>
            Leave a Review
          </Button>
          </Grid>
         
          <Dialog open={open} onClose={handleClose}>
            <ReviewForm
              userId={userInfo.id}
              handleClose={handleClose}
              announcementId={orders.announcementId}
            />
          </Dialog>
        </Grid>
      )}
      </CardActions>

      {/* review form  */}
     
    </Card>
  );
};

export default CardOrder;
