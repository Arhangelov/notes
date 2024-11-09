import React, { useCallback, useEffect, useState } from 'react'

import "./NoteCard.css"
//Context
import { useNotes } from '../../store/NotesContext'

//Service
import { deleteNoteService, getAllNotesService, updateNoteService } from '../../services/homeService';

//Icons
import { FaTrashAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { HiOutlineX } from "react-icons/hi";

const NoteCard = () => {
    const {notes, setNotes, isEditing, setIsEditing} = useNotes();
    const [editNoteText, setEditNoteText] = useState("");
    const [editNoteId, setEditNoteId] = useState(null);

    useEffect(() => {
        getAllNotesService()
        .then(allNotes => {
            console.log(allNotes);
            
            setNotes(allNotes);
        })
    },[setNotes])

    const editNoteHandle = useCallback((noteId, noteText) => {
        setIsEditing(true);
        setEditNoteId(noteId);
        setEditNoteText(noteText);
    },[]);

    const deleteNoteHandle = useCallback((noteId) => {
        deleteNoteService(noteId)
        .then(filteredNotes => {
            setNotes(filteredNotes);
        })
    },[setNotes]);
    
    const cancelHandle = () => {
        setIsEditing(false);
        setEditNoteId(null);
        setEditNoteText("");
    }
    
    const saveHandle = (noteId) => {
        console.log(editNoteText);
        
        updateNoteService(noteId, editNoteText)
        .then(newNotes => {
            setNotes(newNotes)
            setIsEditing(false);
            setEditNoteId(null);
            setEditNoteText("");
        })
    }
    
    const onEditChangeHandler = (e) => {
        setEditNoteText(e.target.value);
    }

    return (
        <div className='note-card-container'>
            {notes?.map(note => (
                <div className='card' key={note.id}>
                    {isEditing && editNoteId === note.id ? (
                        <>
                            <textarea 
                                rows={8} 
                                className='message focus'
                                value={editNoteText}
                                onChange={onEditChangeHandler}
                            />
                            <div className="btns">
                                <button onClick={() => saveHandle(note.id)} className='save'><IoMdCheckmark /></button>
                                <button onClick={cancelHandle}className='cancel'><HiOutlineX /></button>
                            </div>
                            </>
                    ) : (
                        <>
                            <textarea 
                                rows={8} className='message'
                                value={note.message}
                                readOnly
                            />
                            <div className="btns">
                                <button onClick={() => editNoteHandle(note.id, note.message)} className='edit'><MdModeEditOutline /></button>
                                <button onClick={() => deleteNoteHandle(note.id)}className='delete'><FaTrashAlt /></button>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    )
}

export default NoteCard