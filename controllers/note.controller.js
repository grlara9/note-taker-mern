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
router.get("/:id", (req, res)=>{
    Note.findById(req.params.id)
    .then(response => res.json(response))
    .catch(err=>res.status(400).json("Error:" + err))
})

router.put("/update/:id", (req, res)=>{
    Note.findById(req.params.id)
    .then(response =>{
        response.title= req.body.title;
        response.note= req.body.note

        response.save()
        .then(() => res.status(200).json("Updated Successful from backends"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err))
})

router.delete("/:id", (req, res)=>{
    Note.findByIdAndDelete(req.params.id)
    .then(()=>res.json("Note Deleted"))
    .catch(err=>res.status(400).json("Error: " + err))
})


module.exports = router