const router = require("express").Router();
const customerController = require("../../controllers/customerController");

router.route("/")
    .get(customerController.findAll)
    .post(customerController.create);

router
.route("/:id")
.get(customerController.findById);

module.exports = router;