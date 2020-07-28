const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const NoteTakerSchema= new Schema({
    title:{
        type: String,
        required: true
    },
    note:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Note = mongoose.model('Note', NoteTakerSchema);
module.exports = Note