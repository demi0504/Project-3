import axios from "axios";

export default {
    
    getFacilities: function() {
      return axios.get("/api/facilities");
    },
   
    getFacilityId: function(id) {
      return axios.get("/api/facilities/" + id);
    },

    getFacilityCity: function(city) {
        return axios.get("/api/facilities/city/" + city);
    },

    getFacilityState: function(state) {
        return axios.get("/api/facilities/state/" + state);
    },

    getFacilityZip: function(zip) {
        return axios.get("/api/facilities/zip/" + zip);
    },
   
    deleteFacility: function(id) {
      return axios.delete("/api/facilities/" + id);
    },
    
    saveFacility: function(facilityData) {
      return axios.post("/api/facilities", facilityData);
    },

    createReservation: function(reservationData) {
      return axios.post("/api/reservation/create", reservationData);
    }
  };