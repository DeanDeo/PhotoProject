import axios from "axios";

export default {
  getCustomers: function() {
    return axios.get("/api/customers");
  },
  getCustomer: function(id) {
    return axios.get("/api/customers/" + id);
  },
  saveCustomer: function(customerData) {
    return axios.post("/api/customers", customerData);
  },
  // deleteCustomer: function(id) {
  //   return axios.delete("/api/customers/" + id);
  // },

  getPhotographers: function() {
    return axios.get("/api/photographers");
  },
  getPhotographer: function(id) {
    return axios.get("/api/photographers/" + id);
  },
  savePhotographer: function(photographerData) {
    
    return axios.post("/api/photographers", photographerData);
  }
  // deletePhotographer: function(id) {
  //   return axios.delete("/api/photographers/" + id);
  // },
};
