const { Router } = require("express");
const express = require("express");

const createUser = require("../controllers/user/createUser");
const getAllUsers = require("../controllers/user/getAllUsers");
const getUserById = require("../controllers/user/getUserById");
const updateUser = require("../controllers/user/updateUser");
const deleteUser = require("../controllers/user/deleteUser");
const getUserByOrder = require("../controllers/user/getUserByOrder");

const router = Router();
router.use(express.json());

router.post("/", createUser);
router.get("/getAll", getAllUsers);
router.get("/getUser/:id", getUserById);
router.get("/getUserByOrder", getUserByOrder);
router.put("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;
