const express = require('express');
const router = express.Router();
const upload = require('../controllers/uploadController');
const mongoose = require("mongoose");

router.post('/',upload.single("profileImage"), (req, res) => {
  console.log(req.body);
    console.log(req.file);

    return res.redirect("/");
});
mongoose
  .connect("mongodb+srv://HarshitGupta3:iYUNjZG8lkoQnGrb@NODEJS.yiozcp3.mongodb.net/Important?retryWrites=true&w=majority", {
    autoIndex: true,
  })
  .then(() => {
    console.log("DB connected successfully");
  });

module.exports = router;
