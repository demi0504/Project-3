const router = require("express").Router();
const userRoutes = require("./users");
const facilityRoutes = require("./facilities");

// Facility routes
router.use("/facilities", facilityRoutes);

// User routes
router.use("/user", userRoutes);

module.exports = router;
