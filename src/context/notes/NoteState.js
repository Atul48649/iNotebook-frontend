import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=> {
    const notesInitial = [
        {
            "_id": "61f4f4c8ca835e92b9513251",
            "user": "61f4dea3b096fa815c27d664",
            "title": "Meeting today update",
            "description": "Having a meeting @6:30 PM update",
            "tag": "Meeting",
            "createdAt": "2022-01-29T08:03:20.116Z",
            "updatedAt": "2022-01-29T10:51:26.638Z",
            "__v": 0
        },
        {
            "_id": "61f519ebf15eaa5479bffcf2",
            "user": "61f4dea3b096fa815c27d664",
            "title": "Party today",
            "description": "Having a Party @6:30 PM",
            "tag": "Party",
            "createdAt": "2022-01-29T10:41:47.879Z",
            "updatedAt": "2022-01-29T10:41:47.879Z",
            "__v": 0
        },
        {
            "_id": "61f4f4c8ca835e92b9513253",
            "user": "61f4dea3b096fa815c27d664",
            "title": "Meeting today update",
            "description": "Having a meeting @6:30 PM update",
            "tag": "Meeting",
            "createdAt": "2022-01-29T08:03:20.116Z",
            "updatedAt": "2022-01-29T10:51:26.638Z",
            "__v": 0
        },
        {
            "_id": "61f519ebf15eaa5479bffcf4",
            "user": "61f4dea3b096fa815c27d664",
            "title": "Party today",
            "description": "Having a Party @6:30 PM",
            "tag": "Party",
            "createdAt": "2022-01-29T10:41:47.879Z",
            "updatedAt": "2022-01-29T10:41:47.879Z",
            "__v": 0
        },
        {
            "_id": "61f4f4c8ca835e92b9513255",
            "user": "61f4dea3b096fa815c27d664",
            "title": "Meeting today update",
            "description": "Having a meeting @6:30 PM update",
            "tag": "Meeting",
            "createdAt": "2022-01-29T08:03:20.116Z",
            "updatedAt": "2022-01-29T10:51:26.638Z",
            "__v": 0
        },
        {
            "_id": "61f519ebf15eaa5479bffcf6",
            "user": "61f4dea3b096fa815c27d664",
            "title": "Party today",
            "description": "Having a Party @6:30 PM",
            "tag": "Party",
            "createdAt": "2022-01-29T10:41:47.879Z",
            "updatedAt": "2022-01-29T10:41:47.879Z",
            "__v": 0
        },{
            "_id": "61f4f4c8ca835e92b9513257",
            "user": "61f4dea3b096fa815c27d664",
            "title": "Meeting today update",
            "description": "Having a meeting @6:30 PM update",
            "tag": "Meeting",
            "createdAt": "2022-01-29T08:03:20.116Z",
            "updatedAt": "2022-01-29T10:51:26.638Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial);

    // add a note
    const addNote = (title, description, tag)=> {
        console.log('Adding a new note')
        // TODO: API call
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
    const deleteNote = ()=> {
        
    }

    // update a note
    const editNote = ()=> {
        
    }

    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;