import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import "./Home.css";
//Service
import { createNoteService } from '../../services/homeService';

//Context
import { useNotes } from '../../store/NotesContext';
import NoteCard from '../NoteCard/NoteCard';

const Home = () => {
    const {notes, setNotes, isEditing, setIsEditing} = useNotes();
    const [newNote, setNewNote] = useState({
        id: null,
        message: ""
    });

    const onChangeHandler = (e) => {
        setNewNote({
            id: nanoid(),
            message: e.target.value
        })
    }

    //Handler for creating new Note
    const createNote = async(e) => {
        e.preventDefault();

        if (newNote.message.trim() === "") return;
        
        await createNoteService(newNote)
        .then(updatedNotes => {
            setNotes(updatedNotes);
            setNewNote({
                id: null,
                message: ""
            })
        }).catch(err => console.error("Error creating note:", err))
        
    }

    return (
        <div className='home-container'>
            <form onSubmit={createNote}>
                <textarea 
                    onChange={onChangeHandler} 
                    name="text" 
                    id="text"
                    value={newNote.message}
                    rows="6"
                    placeholder='Write a note...'
                />
                <input type="submit" value= "Add Note" className='addBtn' />
            </form>
            <NoteCard />
        </div>
    )
}

export default Home