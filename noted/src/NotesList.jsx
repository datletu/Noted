import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function handleSubmit(event) {
    event.preventDefault();
    console.log('submitting note');
    const formData = new FormData(event.target);
    const newNote = formData.get('newNote');
    console.log(newNote);
}

// the notes, each note is {id, title, date, content}
export default function NotesList(props) {
    return (
        <div className='notes-list'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3  d-flex flex-column align-items-center">
                    <label htmlFor="exampleInputEmail1" className="form-label"></label>
                    <div className='w-50 d-flex flex-row align-items-center'>
                        <input 
                            type="text"
                            className="form-control" 
                            id="exampleInputEmail1" 
                            placeholder='Input your notes here'
                            name='newNote' />
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
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