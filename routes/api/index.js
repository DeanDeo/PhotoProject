const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users");
const photoRoutes = require("./photos")
const profileroutes = require("./profile")

router.use("/photos", photoRoutes)
router.use("/user", userRoutes);
router.use("/profile", profileroutes)

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;