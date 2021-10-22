import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions/adminActions";
import { getUserInfo } from "../../redux/actions/userActions";
import ManageUsers from "./ManageUsers";
import ManageAnnouncements from "./ManageAnnouncements";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Footer from "../Footer/Footer";

const Admin = () => {
  const dispatch = useDispatch();
  const [active, setActive] = React.useState(false);
  const [currentId, setCurrentId] = React.useState(null);
  const { adminChangeStatus } = useSelector((state) => state.adminReducer);

  React.useEffect(() => {
    dispatch(getUserInfo());
    dispatch(actions.getAllUsers());
    dispatch(actions.getAllAnnouncements());
  }, [dispatch, currentId, adminChangeStatus]);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <Grid container direction="column" justifyContent="center">
      <Grid item>
        <div className="headerNav">
          <Header />
          <NavBar />
        </div>
      </Grid>
      <Grid item align="center" mb={5}>
        <Button variant="outlined" onClick={handleActive}>
          {active ? "Manage users" : "Manage announcements"}
        </Button>
      </Grid>
      <Grid item sx={{ height: 500 }}>
        {active ? (
          <ManageAnnouncements handleUpdate={setCurrentId} />
        ) : (
          <ManageUsers handleUpdate={setCurrentId} />
        )}
      </Grid>
      <Grid item>
          <Footer />
      </Grid>
      
      
    </Grid>
  );
};

export default Admin;
