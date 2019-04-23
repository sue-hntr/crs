const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const AdminSchema = new Schema({
    adminfirstname: { type: String, required: true },
    adminlastname: { type: String, required: true },
    appointment: {
        type: Schema.Types.ObjectId,
        ref: "Appointment"
      },

    consumer: {
        type: Schema.Types.ObjectId,
        ref: "Consumer"
      },
    counselor: {
        type: Schema.Types.ObjectId,
        ref: "Counselor"
    }
  });
  
  const Admin = mongoose.model("Admin", AdminSchema);
  
  module.exports = Admin;
  