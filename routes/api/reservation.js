const router = require('express').Router();
const Reservation = require('../../models/reservation');
const reservationController = require("../../controllers/reservationsController");

router.post('/create', async (req, res) => {
    console.log(req.body);
    const reservation = new Reservation({
        dateStart: req.body.dateStart, 
        dateEnd: req.body.dateEnd
    })
    try {
        const newReservation = await reservation.save()
        res.status(201).json(newReservation)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

module.exports = router;
