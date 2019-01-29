const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
    .get(userController.findall)
    .post(userController.create)

router
.route("/:id")
.get(userController.findById);

