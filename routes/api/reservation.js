const router = require('express').Router();
const reservationFunc = require("../../controllers/reservationsController");

router.route('/api/reservation/create').post(function (req, res) {
    const { dateStart, dateEnd } = req.query;

    reservationFunc.create(dateStart, dateEnd)
        .then(result => {
            res.json(result);
        })
        .catch(error => {
            console.log(error)
            res.json(403, error);
        })
});

module.exports = router;
