import { createRoot } from 'react-dom/client';
import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import NotesList from './NotesList';


const root = createRoot(document.querySelector('#root'));
const notes = [
    { id: 1, title: 'Note 1', date: '2023-10-01', content: 'Content of note 1' },
    { id: 2, title: 'Note 2', date: '2023-10-02', content: 'Content of note 2' },
    { id: 3, title: 'Note 3', date: '2023-10-03', content: 'Content of note 3' },
];

root.render(
    <>
        <Header />
        <NotesList notes={notes} />
    </>
);