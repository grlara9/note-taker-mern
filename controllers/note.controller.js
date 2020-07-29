var express = require('express')
var router = express.Router()
var Note= require("../models/notes")

router.get("/", (req, res)=>{
    Note.find()
    .then(response => res.json(response))
    .catch(err=>res.status(400).json("Error: " + err))
})

router.post("/addnote", (req, res)=>{
    const {title, note} = req.body
    const newNote = new Note({
        title,
        note
    })
    newNote.save()
    .then(()=> res.json("Note Added"))
    .catch(err=>res.status(400).json("Error: " + err))
})

router.delete("/:id", (req, res)=>{
    Todo.findByIdAndDelete(req.params.id)
    .then(()=>res.json("Note Deleted"))
    .catch(err=>res.status(400).json("Error: " + err))
})


module.exports = router