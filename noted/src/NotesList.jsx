import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// the notes, each note is {id, title, date, content}
export default function NotesList(props) {
    return (
        <div className='notes-list'>
            <h1>Notes</h1>
            <ul className='list-group'>
                {props.notes.map(note => (
                    <li key={note.id} className='list-group-item'>
                        <div className='d-flex w-100 justify-content-between'>
                            <h5 className='mb-1'>{note.title}</h5>
                            <small>{note.date}</small>
                        </div>
                        <p className='mb-1'>{note.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}