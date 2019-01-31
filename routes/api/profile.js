const router = require("express").Router();
const photoController = require("../../controllers/photoController");
const userController = require("../../controllers/userController")

// router.route("/photographer").post(userController.update)
router.route("/findMain").get(photoController.findMain)
router.route("/findAll").get(photoController.findAll)
router.route("/populatePhotos/:id").get(photoController.populatePhotos)

module.exports =router