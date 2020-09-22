const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config();

var PORT = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())

const uri = process.env.MONGODB_URI;
mongoose.connect( uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("MongoDB database connection established successfully")
})
const noteController = require("./controllers/note.controller")
 app.use("/api", noteController)

 if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}
  
app.listen(PORT, ()=>{
    console.log("Listening on PORT: " + PORT);
})