const router = require("express").Router();
const customerController = require("../../controllers/customerController");
const photographerController = require("../../controllers/photographerController");

router.route("/").get(customerController.findAll);

router.route("/edit/:id").post(photographerController.create);
router
.route("/:id")
.get(customerController.findById);

module.exports = router;