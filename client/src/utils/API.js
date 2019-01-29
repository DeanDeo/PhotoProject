import axios from "axios";

export default {
  // Gets all books
  getCustomers: function() {
    return axios.get("/api/customers");
  },
  // Gets the book with the given id
  getCustomer: function(id) {
    console.log(id)
    return axios.get("/api/customers/" + id);
  },
  saveCustomer: function(customerData) {
    return axios.post("/api/customers", customerData);
  },
  // Deletes the book with the given id
  // deleteCustomer: function(id) {
  //   return axios.delete("/api/customers/" + id);
  // },
  // Saves a book to the database
  getPhotographers: function() {
    return axios.get("/api/photographers");
  },
  // Gets the book with the given id
  getPhotographer: function(id) {
    console.log(id)
    return axios.get("/api/photographers/" + id);
  },
  savePhotographer: function(photographerData) {
    return axios.post("/api/photographers", photographerData);
  }
  // Deletes the book with the given id
  // deletePhotographer: function(id) {
  //   return axios.delete("/api/photographers/" + id);
  // },
  // Saves a book to the database
};
