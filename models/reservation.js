const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    dateStart: {type: Date},
    dateEnd: {type: Date},
    user: { 
    type: Schema.Types.ObjectId, ref: 'User' 
}
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
// boarder: { 
//     type: Schema.Types.ObjectId, ref: 'Facility' 
// }, 
