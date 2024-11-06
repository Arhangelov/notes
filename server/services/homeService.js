const notes = require("../db/notes");

const getAllNotes = () => {
    return notes;
};

const createNote = (newNote) => {  
    const alreadyCreated = notes.find(note => note.message === newNote.message);

    if( alreadyCreated ) {
        throw new Error("Note with the same text already exists.")
    } else {
        notes.push(newNote);
    }

    return notes
};

const updatedNote = ({idNote, newText}) => {
    const updatedNote = notes.find(note => note.id == idNote);

    return updatedNote.message = newText;
};

const deleteNote = (idNote) => {
    return notes.filter(note => note.id != idNote);
};

const getNote = (idNote) => {
    return currNote = notes.find(note => note.id == idNote);
}

module.exports = {
    getAllNotes,
    createNote,
    updatedNote,
    deleteNote,
    getNote
}