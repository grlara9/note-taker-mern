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

 

app.listen(PORT, ()=>{
    console.log("Listening on PORT: " + PORT);
})