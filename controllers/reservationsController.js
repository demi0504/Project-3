const router = require("express").Router();
const userModel = require('../models/user');
const facilityModel = require('../models/facility');
const db = require("../models");
const Reservation = require('../models/reservation');


module.exports = {
  create: function(req, res) {
    const { dateStart, dateEnd } = req.body;
    const mReservation = new Reservation({ dateStart, dateEnd });
    mReservation.save();
    
  }
}