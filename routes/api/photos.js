const router = require("express").Router();
// const photoController = require("../../controllers/photoController")
const Multer = require("multer")
const multer = Multer({
  storage: Multer.MemoryStorage,
  fileSize: 5 * 1024 * 1024
});
const imgUpload = require("../../utils/imgUpload")

router.post("/upload", multer.single("image"), imgUpload.uploadToGcs,
(req, res) => {
  const data = req.body;
  if (req.file && req.file.cloudStoragePublicUrl) {
    data.imageUrl = req.file.cloudStoragePublicUrl;
  }
  //write data.imageUrl to database at this point with ref to photographer
  console.log(data.imageUrl)
  res.json(data);
})


module.exports = router;