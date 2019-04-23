const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    apptfirstname: { type: String },
    apptlastname:{ type: String },
    // apptphone:{ type: String },
    // apptemail: { type: String },
    // apptaddress1: { type: String },
    // apptaddress2: { type: String },
    // apptcity: { type: String },
    // apptstate: { type: String },
    // apptzip: { type: String },
    
    // timeforappt: { type: String },
    // contactby: { type: String },
    // prepurchaseworkshop: { type: Boolean},
    // creditcounseling: { type: Boolean},
    // postpurchase: { type: Boolean},
    // prebankruptcy: { type: Boolean},
    // taxdelinquency: { type: Boolean},
    // defaultdelinquency: { type: Boolean},
    // discussinperson: { type: Boolean},
    // movetoconsumer: { type: Boolean},
    counselor: {
        type: Schema.Types.ObjectId,
        ref: "Counselor"
    },
    admin: {
        type: Schema.Types.ObjectId,
        ref: "Admin"
    },
    consumer: {
        type: Schema.Types.ObjectId,
        ref: "Consumer"
    }
});
  

const Appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = Appointment;
    