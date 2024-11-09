let notes = require("../db/notes");

const getAllNotes = () => {
    return notes;
};

const createNote = (newNote) => {  
    const alreadyCreated = notes.find(note => note.id === newNote.id);

    if( alreadyCreated ) {
        throw new Error("Note with the same id already exists.")
    } else {
        notes.push(newNote);
    }

    return notes
};

const updatedNote = ({noteId, newText}) => {
    
    const newMessage = { message: newText }
    const updatedNote = notes.find(note => note.id == noteId);
    const index = notes.indexOf(updatedNote);

    Object.assign(updatedNote, newMessage);

    notes[index] = updatedNote;
    return notes;
};

const deleteNote = (idNote) => {
    notes = notes.filter(note => note.id != idNote);
    return notes
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