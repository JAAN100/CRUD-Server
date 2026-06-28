const express = require("express");
const router = express.Router();
const {CreateUser , GetUsers , UpdateUser,GetUsersByID , DeleteByID} = require("../collectores/user");

router.post("/createUser" , CreateUser);

router.get("/users" , GetUsers);

router.put("/updateUser/:id" , UpdateUser);

router.get("/getUser/:id" , GetUsersByID);


router.delete("/deleteUser/:id" , DeleteByID);
module.exports = router;










