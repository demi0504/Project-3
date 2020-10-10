const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const facilitySchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: Number, required: true },
    phone: { type: String, required: true },
    about: { type: String },
    safety: { type: String },
    requirements: { type: String },
    src: { type: String },
    occupancy: { type: Number },
    daycare: { type: String },
    boarding: { type: String },
    grooming: { type: String }
});


const Facility = mongoose.model("Facility", facilitySchema);

module.exports = Facility;