const router = require("express").Router();
const contactRoutes = require("./contacts");
const facilityRoutes = require("./facilities");

// Contact routes
router.use("/books", contactRoutes);

// Facility routes
router.use("/facilities", facilityRoutes);

module.exports = router;
