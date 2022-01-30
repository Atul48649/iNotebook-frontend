import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=> {
    const notesInitial = [
        {
            "_id": "61f4f4c8ca835e92b9513258",
            "user": "61f4dea3b096fa815c27d664",
            "title": "Meeting today update",
            "description": "Having a meeting @6:30 PM update",
            "tag": "Meeting",
            "createdAt": "2022-01-29T08:03:20.116Z",
            "updatedAt": "2022-01-29T10:51:26.638Z",
            "__v": 0
        },
        {
            "_id": "61f519ebf15eaa5479bffcfb",
            "user": "61f4dea3b096fa815c27d664",
            "title": "Party today",
            "description": "Having a Party @6:30 PM",
            "tag": "Party",
            "createdAt": "2022-01-29T10:41:47.879Z",
            "updatedAt": "2022-01-29T10:41:47.879Z",
            "__v": 0
        },
        {
            "_id": "61f4f4c8ca835e92b9513258",
            "user": "61f4dea3b096fa815c27d664",
            "title": "Meeting today update",
            "description": "Having a meeting @6:30 PM update",
            "tag": "Meeting",
            "createdAt": "2022-01-29T08:03:20.116Z",
            "updatedAt": "2022-01-29T10:51:26.638Z",
            "__v": 0
        },
        {
            "_id": "61f519ebf15eaa5479bffcfb",
            "user": "61f4dea3b096fa815c27d664",
            "title": "Party today",
            "description": "Having a Party @6:30 PM",
            "tag": "Party",
            "createdAt": "2022-01-29T10:41:47.879Z",
            "updatedAt": "2022-01-29T10:41:47.879Z",
            "__v": 0
        },
        {
            "_id": "61f4f4c8ca835e92b9513258",
            "user": "61f4dea3b096fa815c27d664",
            "title": "Meeting today update",
            "description": "Having a meeting @6:30 PM update",
            "tag": "Meeting",
            "createdAt": "2022-01-29T08:03:20.116Z",
            "updatedAt": "2022-01-29T10:51:26.638Z",
            "__v": 0
        },
        {
            "_id": "61f519ebf15eaa5479bffcfb",
            "user": "61f4dea3b096fa815c27d664",
            "title": "Party today",
            "description": "Having a Party @6:30 PM",
            "tag": "Party",
            "createdAt": "2022-01-29T10:41:47.879Z",
            "updatedAt": "2022-01-29T10:41:47.879Z",
            "__v": 0
        },{
            "_id": "61f4f4c8ca835e92b9513258",
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

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;