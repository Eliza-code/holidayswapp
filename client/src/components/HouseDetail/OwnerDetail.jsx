import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOwnerDetails } from "../../redux/actions/userActions";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";

export default function OwnerDetails({ ownerId }) {
  const dispatch = useDispatch();
  const owner = useSelector((state) => state.userReducer.ownerDetails);

  React.useEffect(() => {
    dispatch(getOwnerDetails(ownerId));
  }, [dispatch, ownerId]);

  return (
    <React.Fragment>
      {owner ? (
        <Paper
          elevation={4}
          sx={{
            p: 2,
            display: "flex",
            flexWrap: "wrap",
            width: 300,
            height: 300,
            borderRadius: "20px",
          }}
        >
          <Avatar
            sx={{ width: 100, height: 100 }}
            alt="Profile Picture"
            src={owner.profilePicture}
          />
          <Typography sx={{ p: 3 }} variant="body2" color="text.primary">
            <b>
              {owner.name} {owner.lastName}
            </b>
          </Typography>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="body2" color="text.primary">
                {owner.description}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="text.primary">
                <b>Nationality:</b> {owner.nacionality}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="text.primary">
                <b>Languages Spoken:</b> {owner.languagesSpoken?.join(', ')}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      ) : (
        <Typography alignText="center" gutterBottom variant="h5">
          Owner not found
        </Typography>
      )}
    </React.Fragment>
  );
}
