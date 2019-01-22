const router = require("express").Router();
const exampleRoutes = require("./examples");

router.use("/examples", exampleRoutes);

module.exports = router;
