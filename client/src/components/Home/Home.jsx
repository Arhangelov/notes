import React, { useState } from 'react';
import "./Home.css"
import { createNoteService } from '../../services/homeService';

const Home = () => {
    const [note, setNote] = useState([]);
    const [text, setText] = useState("");

    const onChangeHandler = (e) => {
        setText(e.target.value);
    }

    const createNote = async(e) => {
        e.preventDefault();

        const newNote = {
            id: Math.floor(Math.random() * 100),
            message: text
        }

        createNoteService(newNote)
        .then(notes => console.log(notes))
        
    }

    return (
        <div className='home-container'>
            <form onSubmit={createNote}>
                <textarea onChange={onChangeHandler} name="text" id="text" />
                <input type="submit" value="Add Note" className='addBtn' />
            </form>
        </div>
    )
}

export default Home