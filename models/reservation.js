const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    dateStart: {type: Date},
    dateEnd: {type: Date}
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
// boarder: { 
//     type: Schema.Types.ObjectId, ref: 'Facility' 
// }, 
// creator: { 
//     type: Schema.Types.ObjectId, ref: 'User' 
// }