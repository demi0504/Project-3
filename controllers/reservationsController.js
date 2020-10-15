const router = require("express").Router();
const userModel = require('../models/user');
const facilityModel = require('../models/facility');
const db = require("../models");
const reservationModel = require('../models/reservation');


module.exports = {
  create: (dateStart, dateEnd) => new Promise((resolve, reject) => {
    module.exports.validate(dateStart, dateEnd)
        .then(() => {
          
        //Create and save post object
          const mReservation = new reservationModel({ post: id, creator: result._id, dateStart, dateEnd });
          mReservation.save();
        })
        .catch(error => {
            reject(new Error(error))
          });
      })
}