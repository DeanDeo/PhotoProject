const router = require("express").Router();
const exampleController = require("../../controllers/exampleController");

router.route("/").get(exampleController.findAll);

module.exports = router;
