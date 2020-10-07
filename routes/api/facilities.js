const router = require("express").Router();
const facilityController = require("../../controllers/facilitysController");

// Contact routes
router.use("/books", contactRoutes);

// Matches with "/api/facilities"
router
    .route("/")
    .get(facilityController.findAll)
    .post(facilityController.create);

// Matches with "/api/facilities/:id"
router
  .route("/:id")
  .get(facilityController.findById)
  .put(facilityController.update)
  .delete(facilityController.remove);

// Matches with "/api/facilities/:city"
router
  .route("/:city")
  .get(facilityController.findByCity);

// Matches with "/api/facilities/:state"
router
  .route("/:state")
  .get(facilityController.findByState);

// Matches with "/api/facilities/:zipcode"

router
  .route("/:zipcode")
  .get(facilityController.findByZipCode);



module.exports = router;
