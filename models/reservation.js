const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    dateStart: {type: Date},
    dateEnd: {type: Date},
    boarder: { 
        type: Schema.Types.ObjectId, ref: 'Facility' 
    }, 
    creator: { 
        type: Schema.Types.ObjectId, ref: 'User' 
    }
});

const Reservation = mongoose.model("reservation", reservationSchema);

module.exports.model = Reservation;
