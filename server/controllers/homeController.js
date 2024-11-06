const router = require("express").Router();
const { getAllNotes, getNote, createNote, deleteNote, updateNote } = require("../services/homeService");


router.get("/", (req, res) => {
    res.json(getAllNotes())
});

router.get("/:idNotes", (req, res) => {
    res.json(getNote(req.params.id))
});

router.post("/", (req, res) => {
    res.json(createNote(req.body))

});

router.get("/delete-note/:idDeletedNote", (req, res) => {
    res.json(deleteNote(req.params.idDeletedNote));
});

router.patch("/update-note", (req, res) => {
    res.json(updateNote(req.body));
});

module.exports = router;