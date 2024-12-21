const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Note
const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    collection: 'Notes',
    timestamps: true
});

const Note = mongoose.model('Note', NoteSchema)
module.exports = Note;