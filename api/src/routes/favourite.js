const { Router } = require("express");
const express = require("express");

const createFavourite = require("../controllers/favourite/createFavourite");
const deleteFavourite = require("../controllers/favourite/deleteFavourite");
const getAllFavourites = require("../controllers/favourite/getAllFavourites");
const getFavouriteById = require("../controllers/favourite/getFavouriteById");

const router = Router();
router.use(express.json());

router.post("/", createFavourite);
router.get("/getAllFavourites", getAllFavourites);
router.get("/getFavourite/:id", getFavouriteById);
router.delete("/deleteFavourite/:id", deleteFavourite);

module.exports = router;
