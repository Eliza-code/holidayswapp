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
  Dialog,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import CancelIcon from "@mui/icons-material/Cancel";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  getOrdersToUser,
  getUserOrders,
  updateOrderStatus,
} from "../../redux/actions/bookingActions";
import { useDispatch, useSelector } from "react-redux";
import ReviewForm from "../Reviews/ReviewForm";
import swal from "sweetalert";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    alignContent: "center",
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
  const { orders, userInfo, type, handleUpdate } = props;
  // console.log(userInfo?.points);
  // console.log(orders?.pointsOrder);

  // console.log(userInfo.id,"mi id usuario")

  const handleOnclik = (newStatus, orderId) => {
    const data = { newStatus, orderId };
    if (newStatus !== "Completed") {
      dispatch(updateOrderStatus(data));
    } else {
      const points = parseInt(userInfo?.points) - parseInt(orders?.pointsOrder);
      console.log(points, "resta");
      const pts = points * -1
      points >= 0
        ? dispatch(updateOrderStatus(data))
        : swal({
            title:
              `Oops! You do not have enough points to complete the reservation.Try to buy ${pts} points!`,
            icon: "warning",
          });
    }
    handleUpdate(orderId)
  };

  useEffect(() => {}, []);

  // reviews
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const userInfo2 = useSelector((state) => state.userReducer.ownerDetails);
  //console.log(userInfo2, "mi usuario real");

  return (
    <Card className={classes.cards} sx={{ maxWidth: 200 }}>
      <CardMedia
        component="img"
        height="140"
        image={userInfo.profilePicture}
        alt="User Picture"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {userInfo.username}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          {orders.description}
        </Typography>

        {orders.status === "Pending" && (
          <Alert severity="info">{orders.status}</Alert>
        )}
        {orders.status === "Accepted" && (
          <Alert severity="success">{orders.status}</Alert>
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
          {type === "sent" &&
            orders.status !== "Completed" &&
            orders.status !== "Cancelled" && (
              <>
                <IconButton
                  color="error"
                  aria-label=""
                  onClick={() => handleOnclik("Cancelled", orders.id)}
                >
                  <CancelIcon></CancelIcon>
                </IconButton>
                {orders.status === "Accepted" && (
                  <IconButton
                    color="warning"
                    aria-label=""
                    onClick={() => handleOnclik("Completed", orders.id)}
                  >
                    <ThumbUpAltIcon></ThumbUpAltIcon>
                  </IconButton>
                )}
              </>
            )}

          {type === "received" &&
            orders.status !== "Completed" &&
            orders.status !== "Cancelled" && (
              <>
                <IconButton
                  color="error"
                  aria-label=""
                  onClick={() => handleOnclik("Cancelled", orders.id)}
                >
                  <CancelIcon></CancelIcon>
                </IconButton>

                {orders.status !== "Accepted" && (
                  <IconButton
                    color="success"
                    aria-label=""
                    onClick={() => handleOnclik("Accepted", orders.id)}
                  >
                    <CheckCircleIcon></CheckCircleIcon>
                  </IconButton>
                )}
              </>
            )}
        </Grid>
        {orders?.status === "Completed" && (
          <Grid container>
            <Grid item>
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
    </Card>
  );
};

export default CardOrder;
