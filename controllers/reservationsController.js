const router = require("express").Router();
const userModel = require('../models/user');
const facilityModel = require('../models/facility');
const db = require("../models");
const reservationModel = require('../models/reservation');


module.exports = {
  create : function(req, res) {
    db.Reservation.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};