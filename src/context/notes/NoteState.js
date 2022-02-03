import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    const host = 'http://localhost:8000'

    const token = 'eyJhbGciOiJIUzI1NiJ9.NjFmNGRlYTNiMDk2ZmE4MTVjMjdkNjY0.jcneSj3GpVSxGu4frUwk9vPttLQvh7KU4YtZkshL0GQ';

    const notesInitial = [];

    const [notes, setNotes] = useState(notesInitial);

    // get all notes
    const getNotes = async () => {
        // API Call
        const response = await fetch(`${host}/api/note/fetch`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiJ9.NjFmNGRlYTNiMDk2ZmE4MTVjMjdkNjY0.jcneSj3GpVSxGu4frUwk9vPttLQvh7KU4YtZkshL0GQ'
            }
        });
        const json = await response.json();
        setNotes(json);
    }

    // add a note
    const addNote = async (title, description, tag) => {
        // API Call
        const response = await fetch(`${host}/api/note/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: title[0], description: description[0], tag: tag[0], token })
        });

        const note = await response.json();
        setNotes(notes.concat(note.data));
    }

    // delete a note
    const deleteNote = async (id) => {
        // API call
        const response = await fetch(`${host}/api/note/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token })
        });
        const json = response.json();
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes);
    }

    // update a note
    const editNote = async (id, title, description, tag) => {
        //API call
        await fetch(`${host}/api/note/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: title[0], description: description[0], tag: tag[0], token })
        });

        // logic to edit in client
        let newNote = JSON.parse(JSON.stringify(notes));
        for (let index = 0; index < newNote.length; index++) {
            const element = newNote[index];
            if (element._id === id) {
                newNote[index].title = title;
                newNote[index].description = description;
                newNote[index].tag = tag;
                break;
            }
        }
        setNotes(newNote);
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;