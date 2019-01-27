const router = require("express").Router();
const userController = require("../../controllers/userController");
const photoController = require("../../controllers/photoController");

router.route("/photographer").post(userController.update)