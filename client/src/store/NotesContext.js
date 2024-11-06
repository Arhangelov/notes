import { createContext, useContext, useState } from "react";

const NotesContext = createContext();

const initialState = [];

export const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState(initialState);

    return(
        <NotesContext.Provider value={[notes, setNotes]}>
            {children}
        </NotesContext.Provider>
    );
};

export const useNotes = () => useContext(NotesContext);