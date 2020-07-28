const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config();

app.use(cors())
app.use(express.json())

var PORT = process.env.PORT || 5000;
 

app.listen(PORT, ()=>{
    console.log("Listening on PORT: " + PORT);
})