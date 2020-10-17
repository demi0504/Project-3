const router = require("express").Router();
const facilityController = require("../../controllers/facilitysController");
const passport = require("passport");

// Matches with "/api/facilities"
router
    .route("/")
    .get(facilityController.findAll)
    .post(passport.authenticate('jwt', { session: false }), facilityController.create);

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
