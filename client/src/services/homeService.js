const url = "http://localhost:5000";

export const createNoteService = async (newNote) => {
    return fetch(url + `/create`, {
        method: "POST",
        headers: {"Content-Type": "äpplication/json"},
        body:JSON.stringify(newNote)
    }).then(res => res.json());
}