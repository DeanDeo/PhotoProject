require ("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const multer  = require('multer');
const fs = require("fs")

const data = 
  {
    type: process.env.type,
    project_id: process.env.project_id,
    private_key_id: process.env.private_key_id,
    private_key: process.env.private_key,
    client_email: process.env.client_email,
    client_id: process.env.client_id,
    auth_uri: process.env.auth_uri,
    token_uri: process.env.token_uri,
    auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
    client_x509_cert_url: process.env.client_x509_cert_url
  }

  try {
    if (fs.existsSync("./final-project-230222-5ae4963fbec8.json")) {
    
    }

else{
  fs.writeFile ("final-project-230222-5ae4963fbec8.json", JSON.stringify(data), function(err) {
    if (err) throw err;
    console.log('complete');
  });

}
} catch(err) {
  console.error(err)
}






// fs.writeFile ("final-project-230222-5ae4963fbec8.json", JSON.stringify(data), function(err) {
//   if (err) throw err;
//   console.log('complete');
//   }
// );

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
