const mongoose = require('mongoose');
const dbconnect = () =>{
    mongoose.connect('mongodb+srv://HarshitGupta3:iYUNjZG8lkoQnGrb@NODEJS.yiozcp3.mongodb.net/Important?retryWrites=true&w=majority');
mongoose.connection.on('error',err=>{
    console.log('connection failed')
})
mongoose.connection.on('connected',connected=>{
    console.log('connected with database successfully')
})
}
module.exports = dbconnect;