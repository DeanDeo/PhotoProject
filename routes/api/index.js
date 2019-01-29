const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users");
const photoRoutes = require("./photos")
// const profileRoutes = require("./profile")
const customerRoutes = require("./customerProfile")
const photographerRoutes = require("./photographerProfile")

router.use("/photos", photoRoutes);
router.use("/user", userRoutes);
// router.use("/profile", profileRoutes);
router.use("/customers", customerRoutes);
router.use("/photographers", photographerRoutes);


// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;