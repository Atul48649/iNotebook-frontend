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
        console.log(json);
        setNotes(json);
    }

    // add a note
    const addNote = async (title, description, tag) => {
        console.log('Adding a new note')
        // TODO: API call
        const response = await fetch(`${host}/api/note/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiJ9.NjFmNGRlYTNiMDk2ZmE4MTVjMjdkNjY0.jcneSj3GpVSxGu4frUwk9vPttLQvh7KU4YtZkshL0GQ'
            },
            body: JSON.stringify({title, description, tag})
        });

        const note = {
            "_id": "61f4f4c8ca835e92b9513217",
            "user": "61f4dea3b096fa815c27d664",
            "title": title,
            "description": description,
            "tag": tag,
            "createdAt": "2022-01-29T08:03:20.116Z",
            "updatedAt": "2022-01-29T10:51:26.638Z",
            "__v": 0
        };
        setNotes(notes.concat(note));
    }

    // delete a note
    const deleteNote = async (id) => {
        // API call
        const response = await fetch(`${host}/api/note/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
                // 'auth-token': 'eyJhbGciOiJIUzI1NiJ9.NjFmNGRlYTNiMDk2ZmE4MTVjMjdkNjY0.jcneSj3GpVSxGu4frUwk9vPttLQvh7KU4YtZkshL0GQ'
            },
            body: JSON.stringify({token})
        });
        const json =  response.json();
        console.log(json);

        console.log('Deleting the node with the id: ', id)
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes);
    }

    // update a note
    const editNote = async (id, title, description, tag) => {
        // TODO: API call
        const response = await fetch(`${host}/api/note/update/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiJ9.NjFmNGRlYTNiMDk2ZmE4MTVjMjdkNjY0.jcneSj3GpVSxGu4frUwk9vPttLQvh7KU4YtZkshL0GQ'
            },
            body: JSON.stringify({title, description, tag})
        });
        const json =  response.json();

        // logic to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if(element._id === id){
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;