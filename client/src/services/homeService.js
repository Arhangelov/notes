const url = "http://localhost:5000";

export const getAllNotesService = async () => {
    return fetch(url + "/", {
        method: "GET",
        headers: {"Content-Type": "application/json"},
    }).then(res => res.json());
}

export const createNoteService = async (newNote) => {   
    return fetch(url + "/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify(newNote)
    }).then(res => res.json());
};

export const deleteNoteService = async (noteId) => {
    return fetch(url + `/delete-note/${noteId}`, {
        method: "GET",
        headers: {"Content-Type": "application/json"},
    }).then(res => res.json());
};