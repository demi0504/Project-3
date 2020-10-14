const router = require("express").Router();
const facilityController = require("../../controllers/facilitysController");

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

// Matches with "/api/facilities/city/:city"
router
  .route("/city/:city")
  .get(facilityController.findByCity);

// Matches with "/api/facilities/state/:state"
router
  .route("/state/:state")
  .get(facilityController.findByState);

// Matches with "/api/facilities/zip/:zip"

router
  .route("/zip/:zip")
  .get(facilityController.findByZipCode);



module.exports = router;
