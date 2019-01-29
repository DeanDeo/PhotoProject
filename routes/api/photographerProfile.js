const router = require("express").Router();
const photographerController = require("../../controllers/photographerController");

router.route("/")
    .get(photographerController.findall)
    .post(photographerController.create)

router
.route("/:id")
.get(photographerController.findById);

