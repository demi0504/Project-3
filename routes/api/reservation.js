const router = require('express').Router();
const reservationModel = require('../../models/reservation');
const reservationController = require("../../controllers/reservationsController");

router.route('/create').post(function (req, res) {
    const { dateStart, dateEnd } = req.query;

    reservationController.create(dateStart, dateEnd)
        .then(result => {
            res.json(result);
        })
        .catch(error => {
            console.log(error)
            res.json(403, error);
        })
});
module.exports = router;
