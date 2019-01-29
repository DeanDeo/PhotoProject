const router = require("express").Router();
const photoController = require("../../controllers/photoController");

// router.route("/photographer").post(userController.update)
router.route("/findMain").get(photoController.findMain)
router.route("/findAll").get(photoController.findAll)
router.route("/populatePhotos/:uid").get(photoController.populatePhotos)

module.exports =router