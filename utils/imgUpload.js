"use strict";
const {Storage} = require("@google-cloud/storage");
const fs = require("fs");


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

 



const gcs = new Storage({
  projectId: "final-project",
});

const bucketName = "final-photo-project";
const bucket = gcs.bucket(bucketName);

function getPublicUrl(filename) {
  try {
    if (fs.existsSync("../final-project-230222-5ae4963fbec8.json")) {
    
    }

else{
  fs.writeFile ("../final-project-230222-5ae4963fbec8.json", JSON.stringify(data), function(err) {
    if (err) throw err;
    console.log('complete');
  });

}
} catch(err) {
  console.error(err)
}
  return "https://storage.googleapis.com/" + bucketName + "/" + filename;
}

let ImgUpload = {};

ImgUpload.uploadToGcs = (req, res, next) => {

  if (!req.file) return next();

  // file names store in bucket must be unique
  const original = req.file.originalname;
  const uniqueGCSName =
    original.substring(0, original.lastIndexOf(".")) +
    Date.now() +
    original.substring(original.lastIndexOf("."));
  const file = bucket.file(uniqueGCSName);

  const stream = file.createWriteStream({
    metadata: {
      contentType: req.file.mimetype
    }
  });

  stream.on("error", err => {
    req.file.cloudStorageError = err;
    console.log("on stream error", err);
    next(err);
  });

  stream.on("finish", () => {
    req.file.cloudStorageObject = uniqueGCSName;
    req.file.cloudStoragePublicUrl = getPublicUrl(uniqueGCSName);
    next();
  });

  stream.end(req.file.buffer);
};

module.exports = ImgUpload;