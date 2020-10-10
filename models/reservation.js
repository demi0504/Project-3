const mongoose = require("mongoose");

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

const reservation = mongoose.model("reservation", reservationSchema);

module.exports.model = reservation;
