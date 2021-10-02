import React, {useEffect}  from "react";
import { getHouses } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";
import Houses from "./Houses";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Announcements() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHouses());
  }, [dispatch]);
  return (
    <div>
      <NavBar />
      <hr />
      <Houses />
      <Footer />
    </div>
  );
}
