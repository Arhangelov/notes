const Notes = require("../db/notes");

const getAllNotes = () => {
    return Notes;
};

const createNote = (newNote) => {
    const alreadyCreated = Notes.find(note => note.id == createNote.id);

    if( alreadyCreated ) {
        throw new Error("Note with the same id already exists.")
    } else {
        Notes.push(newNote);
    }
};

const updatedNote = (idNote, newText) => {
    const updatedNote = Notes.find(note.id == idNote);

    return updatedNote.message = newText;
};

const deleteNote = (idNote) => {
    return Notes.filter(note => note.id != idNote);
};

const getNote = (idNote) => {
    return currNote = Notes.find(note => note.id == idNote);
}

module.exports = {
    getAllNotes,
    createNote,
    updatedNote,
    deleteNote,
    getNote
}