import React, { useCallback, useEffect } from 'react'

import "./NoteCard.css"
//Context
import { useNotes } from '../../store/NotesContext'

//Service
import { getAllNotesService } from '../../services/homeService';

//Icons
import { FaTrashAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";

const NoteCard = () => {
    const [notes, setNotes] = useNotes();

    useEffect(() => {
        getAllNotesService()
        .then(allNotes => {
            console.log(allNotes);
            
            setNotes(allNotes);
        })
    },[setNotes])

    const editNoteHandle = (noteId) => {
        console.log(noteId);
    };

    const deleteNoteHandle = (noteId) => {
        console.log(noteId);
        deleteNoteHandle(noteId)
        .then(filteredNotes => {
            setNotes(filteredNotes)
        })
    };

    return (
        <div className='note-card-container'>
            {notes?.map(note => (
                <div className='card' key={note.id}>
                    <p className='message'>{note.message}</p>
                    <div className="btns">
                        <button onClick={()=> editNoteHandle(note.id)} className='edit'><MdModeEditOutline /></button>
                        <button onClick={() => deleteNoteHandle(note.id)}className='delete'><FaTrashAlt /></button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default NoteCard