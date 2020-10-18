const router = require("express").Router();
const userModel = require('../models/user');
const facilityModel = require('../models/facility');
const db = require("../models");
const Reservation = require('../models/reservation');


module.exports = {
  create: (req, res) => {
    const { id, dateStart, dateEnd } = req.body;
    console.log("is this:", req.body);
    const newReservation = new Reservation({ facility: id, dateStart, dateEnd });
    newReservation.save();
  }
}
