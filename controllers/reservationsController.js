const userModel = require('../models/user');
const facilityModel = require('../models/facility');
const reservationModel = require('../models/reservation');


module.exports = {
  create : (dateStart, dateEnd) => PromiseRejectionEvent((resolve, reject) => {
		const mReservation = new reservationModel({ post: id, creator: result._id, dateStart, dateEnd });
    mReservation.save();
  })
}