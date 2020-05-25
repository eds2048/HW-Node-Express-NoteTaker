// Dependencies
// =============================================================

var express = require("express");
var path = require("path");
var db = require("../db/db.json");

// Sets up Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing - WORKS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes - Ensure top to bottom, routes are specific to more general - WORKS
// =============================================================

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});

// GET /api/notes - WORKS
// Read the db.jsonfile and return all saved notes as JSON
app.get("/api/notes", function (req, res) {
    console.log("response" + res.json(db));
    return res.json(db);

});

// Index - WORKS
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
    
});


// * POST / api / notes - Should recieve a new note to save on the request body, 
// add it to the db.json file, and then return the new note to the client.

var newNote = require("../db/db.json");
// or..var newNote = req.body;
app.post("/api/notes",function(req,res){
    
    console.log("newNote" + newNote);
    newNote.title = newNote.title.push();
    newNote.text = newNote.text.push();
    db.push(newNote);

});


//   * DELETE`/api/notes/:id`- Should recieve a query paramter containing the 
//   id of a note to delete.This means you'll need to find a way to give each note a unique `id` 
//   when it's saved.In order to delete a note, you'll need 
//   to read all notes from the `db.json` file, remove the note with 
//   the given `id` property, and then rewrite the notes to the `db.json` file.

// app.delete("/api/notes/:id", function(req,res){

// )};


// Start server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});