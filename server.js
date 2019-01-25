require ("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const multer  = require('multer');


const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
//change to match your db name!
const connection = mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/photoApp", { useNewUrlParser: true }
);



// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
