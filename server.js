const express = require('express');
const http = require('http');
const path = require('path');
// const socketSetup = require('./sockets/index');
const emailRoutes = require('./routes/emailRoutes');
const smsRouter = require('./routes/smsRouter');
const uploadRoutes = require('./routes/uploadRoutes');
const dbconnect = require('./config/database');
const bodyParser = require('body-parser');
// const morgan = require('morgan');
// const cors = require('cors');
const multer = require("multer");

// Initialize express app
const app = express();

dbconnect();

app.use('/sms', smsRouter); //twilio
app.use('/email', emailRoutes); // nodemialer
app.use("/upload", uploadRoutes); //multer

app.use(express.json());
app.use("/api/users", require("./routes/userRoutes"));
app.use(express.urlencoded({ extended:false }));


// app.post("/upload", upload.single("profileImage"), (req, res) => {
//     console.log(req.body);
//     console.log(req.file);

//     return res.redirect("/");
// })


const PORT = process.env.PORT || 3000;

app.get("/", (req,res,next) =>{
  res.send("hi server is live");
});

const start = async()=> {
  try{
    app.listen(PORT, () =>{
      console.log('Yes I am listening to 3000');
    });
  } catch (error){
    console.log(error);
  }
};

start();