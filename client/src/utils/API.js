import axios from "axios";

export default {
    
    getFacilities: function() {
      return axios.get("/api/facilities");
    },
   
    getFacilityId: function(id) {
      return axios.get("/api/facilities/" + id);
    },

    getFacilityCity: function(id) {
        return axios.get("/api/facilities/" + city);
    },

    getFacilityState: function(id) {
        return axios.get("/api/facilities/" + id);
    },

    getFacilityZip: function(id) {
        return axios.get("/api/facilities/" + id);
    },
   
    deleteFacility: function(id) {
      return axios.delete("/api/facilities/" + id);
    },
    
    saveFacility: function(facilityData) {
      return axios.post("/api/facilities", facilityData);
    }
  };