const router = require("express").Router();


router.get("/", (req, res) => {
    getAllNotes()
    .then(allNotes => {
        res.json(allNotes);
    }).catch(err => {
        return res.status(400).send({
            message: `${err.message}`,
            type: "ERROR"
        });
    })
});

router.get("/:idNotes", (req, res) => {
    getNote(req.params.idNotes)
    .then(note => {
        res.json(note);
    }).catch(err => {
        return res.status(400).send({
            message: `${err.message}`,
            type: "ERROR"
        });
    })
});

router.post("/create", (req, res) => {
    createNote(req.body)
    .then(notes => {
        res.json(notes);
    }).catch(err => {
        return res.status(400).send({
            message: `${err.message}`,
            type: "ERROR"
        });
    })
});

router.get("/delete-note/:idDeletedNote", (req, res) => {
    deleteNote(req.params.idDeletedNote)
    .then(notes => {
        res.json(notes);
    }).catch(err => {
        return res.status(400).send({
            message: `${err.message}`,
            type: "ERROR"
        });
    })
});

router.patch("/update-note", (req, res) => {
    updateNote(req.body)
    .then(note => {
        res.json(note);
    }).catch(error => {
        return res.status(400).send({
            message: `${err.message}`,
            type: "ERROR"
        });
    })
});

module.exports = router;