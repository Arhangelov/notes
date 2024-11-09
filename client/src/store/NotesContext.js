import { createContext, useContext, useState } from "react";

const NotesContext = createContext();

const initialState = [];

export const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState(initialState);
    const [isEditing, setIsEditing] = useState(false);

    return(
        <NotesContext.Provider value={{ notes, setNotes, isEditing, setIsEditing }}>
            {children}
        </NotesContext.Provider>
    );
};

export const useNotes = () => useContext(NotesContext);