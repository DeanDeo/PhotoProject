const router = require("express").Router();
const customerController = require("../../controllers/customerController");

router.route("/")
    .get(customerController.findall)
    .post(customerController.create)

router
.route("/:id")
.get(customerController.findById);

