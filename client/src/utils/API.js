import axios from "axios";

export default {
  getCustomers: function () {
    return axios.get("/api/customers");
  },
  getCustomer: function (id) {
    return axios.get("/api/customers/" + id);
  },
  saveCustomer: function (customerData, id) {
    return axios.post("/api/customers/edit/" + id, customerData);
  },
  // deleteCustomer: function(id) {
  //   return axios.delete("/api/customers/" + id);
  // },

  getPhotographers: function (location) {
    return axios.post("/api/photographers", location);
  },
  getPhotographer: function (id) {
    return axios.get("/api/photographers/" + id);
  },
  savePhotographer: function (photographerData, id) {

    return axios.post("/api/photographers/edit/" + id, photographerData);
  }
  // deletePhotographer: function(id) {
  //   return axios.delete("/api/photographers/" + id);
  // },
};
