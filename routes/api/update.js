const router = require("express").Router();
const photoController = require("../../controllers/photoController");

router.route("/mainPic").put(photoController.updateMain)
router.route("/profilePic").put(photoController.updateProfile)

module.exports = router