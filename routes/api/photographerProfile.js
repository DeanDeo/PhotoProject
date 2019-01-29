const router = require("express").Router();
const photographerController = require("../../controllers/photographerController");

router.route("/")
    .get(photographerController.findAll)
    .post(photographerController.create)

router
.route("/:id")
.get(photographerController.findById);

module.exports = router;