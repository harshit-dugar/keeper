const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.set("strictQuery", false);
const pass = process.env.PASSWORD
mongoose.connect("mongodb+srv://admin:"+pass+"@cluster0.sgcylws.mongodb.net/keeperDB", {useNewUrlParser: true, useUnifiedTopology: true});
const noteSchema = new mongoose.Schema({
    title: String,
    content: String
})
const Note = mongoose.model("Note", noteSchema);

app.get('/', function(req, res){
    Note.find(function(err, notes){
        if(err){
            console.log(err);
        } else {
            res.json(notes);
        }
    })
})
app.post("/add",function(req, res){
    const {title, content} = req.body;
    const newNote = new Note({
        title,
        content
    })
    console.log(newNote);
    newNote.save();
})
app.post("/delete", function(req, res){
    const noteTitle = req.body.title;
    const noteContent = req.body.content;
    Note.findOneAndDelete({title:noteTitle,content:noteContent},function(err){
        if(err){
            console.log(err);
        } else {
            console.log("Successfully deleted");
        }
    })
})

app.listen(3001,()=>{
    console.log("Server started on port 3001");
})