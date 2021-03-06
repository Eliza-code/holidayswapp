import React from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Swal from "sweetalert2";

import { deleteAnnouncement } from "../../redux/actions/postActions";

const HouseCard = ({ house, handleOpen, handleCurrentHouse }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    handleCurrentHouse(house);
    // eslint-disable-next-line
  }, []);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteAnnouncement(house.id));
        Swal.fire("Your post has been deleted!").then(() =>
          window.location.reload()
        );
      }
    });
  };

  return (
    <Box
      component={Paper}
      sx={{ height: 400, width: 300, borderRadius: 5 }}
      elevation={5}
    >
      <Grid container direction="column" textAlign="center" spacing={2}>
        <Grid item xs={6} sx={{ m: 2 }}>
          <img
            src={house.image[0]}
            alt={house.title}
            style={{
              height: 180,
              width: 200,
              objectFit: "cover",
              borderRadius: 5,
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography gutterBottom variant="h5">
            <b>{house.title}</b>
          </Typography>
          <Typography gutterBottom variant="body1">
            <b>{house.adress}</b>
          </Typography>
        </Grid>
        <Grid>
          <IconButton
            size="large"
            color="primary"
            aria-label="edit"
            onClick={handleOpen}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            size="large"
            color="secondary"
            aria-label="delete"
            onClick={handleDelete}
          >
            <DeleteForeverIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HouseCard;
