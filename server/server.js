const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Note = require('./Model/Note');

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
};
const app = express();
app.use(cors(corsOptions));
app.use(express.json());

//listen for request
app.listen(3000);
console.log('server started on http://localhost:3000');

const uri = "mongodb+srv://random_dev:0e0cb00T@nodecluster.krfae.mongodb.net/?retryWrites=true&w=majority&appName=NodeCluster";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

app.get('/add-notes', (req, res) => {
    const note = new Note({
        title: 'Note 1',
        content: 'This is a note'
    });
    note.save()
        .then(note => res.json(note))
        .catch(err => console.log(err));
});

app.get('/api/notes', (req, res) => {
    Note.find()
        .then(notes => res.json(notes))
        .catch(err => console.log(err));
});

app.post('/api/add-note', (req, res) => {
    console.log(req);
    const note = new Note({
        title: req.body.title,
        content: req.body.content
    });
    note.save()
        .then(note => res.json(note))
        .catch(err => console.log(err));
});

