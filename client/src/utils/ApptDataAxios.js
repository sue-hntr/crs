import axios from "axios";

//This util pulls from local db, not Google appointments API
//this is backend, NOT react-router-dom 
//use these in the pages to outline query functions
//under the React function methods

export default {
  // Gets all appointments
  getAppointments: function() {
    return axios.get("/api/appointments");
  },
  // Gets the appointment with the given id
  getAppointment: function(id) {
    return axios.get("/api/appointments/" + id);
  },
  // Deletes the appointment with the given id
  deleteAppointment: function(id) {
    return axios.delete("/api/appointments/" + id);
  },
  // Saves a appointment to the database
  saveAppointment: function(appointmentData) {
    return axios.post("/api/appointments", appointmentData);
  }
};
