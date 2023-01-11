const express = require("express")
const Note = require('./../Models/Note')
const router = express.Router();

router.get("/", function(req, res){
    res.send("home")
})

router.post("/list/", async function(req, res){
    var notes = await Note.find({userid: req.body.userid})
    res.json(notes) 
})

router.post("/add", async function(req, res){
    res.json(req.body)

    let newNote = new Note(req.body)
    await newNote.save();

})  

router.post("/update", async function(req, res){
    await Note.deleteOne({id: req.body.id}) 

    let newNote = new Note(req.body)
    await newNote.save()

    res.json(req.body)

})

router.post("/delete", async function(req, res){
    await Note.deleteOne({id: req.body.id}) 

})


module.exports = router;