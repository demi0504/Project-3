const router = require('express').Router();
const Reservation = require('../../models/reservation');
const User = require("../../models/user");
const Facility = require("../../models/facility");
const db = require("../../models");


router.post('/create', async (req, res) => {
    console.log(req.body);
    const reservation = new Reservation({
        dateStart: req.body.dateStart, 
        dateEnd: req.body.dateEnd,
        facility: req.body.id
    })
    try {
        const newReservation = await reservation.save()
        // const {_id} = dbModel
        // console.log("id", _id);
        // Facility.update({_id: req.body._id}, {$push: { reservations: _id }})
        res.status(201).json(newReservation)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

module.exports = router;
// db.User.update({_id: req.user._id}, {$push: { facilities: _id }})
