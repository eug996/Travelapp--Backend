const express = require("express");

const postLogin = require("./controllers/users/login");
const postUser = require("./controllers/users/register");
const putUserDetails = require("./controllers/users/putUserDetails");
const authentication = require("./middlewares/authentication");
const authorise = require("./middlewares/authorisation");
const getUserTypes = require("./controllers/users/userTypes");
const { ADMIN } = require("~root/constants/userTypes");

const getAllLocations=require("./controllers/locations/getAllLocations");
const getLocationById=require("./controllers/locations/getLocationById");
const deleteLocationById=require("./controllers/locations/deleteLocationById");
const patchLocationById=require("./controllers/locations/patchLocationById");
const postLocation= require("./controllers/locations/postLocation");

const router = express.Router();

// USER MANAGEMENT
router.post("/login", postLogin);
router.post(
  "/register",
  authentication,
  authorise({ roles: [ADMIN] }),
  postUser
);
router.put("/edit/user", authentication, putUserDetails);

router.get("/user-types", getUserTypes);

router.get("/locations", getAllLocations);
router.get("/locations/:locationId", getLocationById);
router.delete("/locations/:locationId", deleteLocationById);
router.patch("/locations/:locationId",patchLocationById);
router.post("/locations", postLocation);

module.exports = router;
