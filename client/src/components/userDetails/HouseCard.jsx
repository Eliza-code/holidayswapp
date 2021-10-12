import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const HouseCard = ({ house }) => {

    return (
        <Box component={Paper} sx={{ height: 300, width: 600 }} elevation={5}>
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <img src={house.image[0]} alt={house.title} width="200" />
                </Grid>
                <Grid item xs={8}>
                    <Typography gutterBottom variant="h5">
                        <b>{house.title}</b>
                    </Typography>
                </Grid>
                <Button>VIEW DETAILS</Button>
            </Grid>
        </Box>
    )
}

export default HouseCard;