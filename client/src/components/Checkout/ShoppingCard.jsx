import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ShoppingCard = ({ points, handlePoints }) => {

  

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Typography sx={{ fontSize: 100 }}>{points}</Typography>
        <input
          name="points"
          type="number"
          value={points}
          onChange={({ target }) => handlePoints(target.value)}
        />
        <Typography variant="h4">Points</Typography>
      </Box>
    </React.Fragment>
  );
};

export default ShoppingCard;
