const router = require("express").Router();
const { getAllNotes, getNote, createNote, deleteNote, updatedNote } = require("../services/homeService");


router.get("/", (req, res) => {
    res.json(getAllNotes())
});

router.get("/:idNotes", (req, res) => {
    res.json(getNote(req.params.id))
});

router.post("/", (req, res) => {
    res.json(createNote(req.body))

});

router.get("/delete-note/:noteId", (req, res) => {
    res.json(deleteNote(req.params.noteId));
});

router.post("/update-note", (req, res) => {
    res.json(updatedNote(req.body));
});

module.exports = router;