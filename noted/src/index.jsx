import { createRoot } from 'react-dom/client';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Header from './Header';
import NotesList from './NotesList';
import Footer from './Footer';

const root = createRoot(document.querySelector('#root'));

function App() {
    const [notes, setNotes] = useState([]);
    
    // Fetch notes from the server
    useEffect(() => {
        fetch('http://localhost:3000/api/notes')
            .then(response => response.json())
            .then(data => setNotes(data))
            .catch(error => console.error('Error fetching notes:', error));}
    ,[]);

    // Function to add a new note
    const addNote = (newNote) => {
        console.log('Adding note:', JSON.stringify(newNote));
        fetch('http://localhost:3000/api/add-note', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newNote)
        })
            .then(response => response.json())
            .then(data => setNotes([...notes, data]))
            .catch(error => console.error('Error adding note:', error));    
    };

    return (
        <div>
            <Header />
            <NotesList notes={notes} addNote={addNote} />
            <Footer />
        </div>
    );
}

root.render(<App />);