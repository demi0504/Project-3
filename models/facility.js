const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const facilitySchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    occupancy: { type: Number, required: true },
    daycare: { type: Boolean },
    boarding: { type: Boolean },
    grooming: { type: Boolean }
});


const Facility = mongoose.model("Facility", facilitySchema);

module.exports = Facility;