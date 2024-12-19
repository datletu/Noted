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

    useEffect(() => {
        fetch('/notes.json')
            .then(response => response.json())
            .then(data => setNotes(data))
            .catch(error => console.error('Error fetching notes:', error));
    }, []);

    return (
        <div>
            <Header />
            <NotesList notes={notes} />
            <Footer />
        </div>
    );
}

root.render(<App />);