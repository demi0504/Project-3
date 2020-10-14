const router = require('express').Router();
const reservationController = require("../../controllers/reservationsController");

router.post(reservationController.create)

module.exports = router;
