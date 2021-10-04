import React, { useEffect } from "react";
import { getHouses } from "../../redux/actions/postActions";
import { useDispatch } from "react-redux";
import Houses from "./Houses";

const Announcements = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getHouses());
  }, [dispatch]);

  return (
    <div>
      <Houses />
    </div>
  );
};

export default Announcements;
