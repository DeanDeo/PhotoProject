const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/:uid").get(userController.findById);
router.route("/create").post(userController.create);

module.exports = router;
