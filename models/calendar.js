// Load the mongoose library
const mongoose = require('mongoose');

// Set up the schema for the todo tasks collection
const calendarSchema = new mongoose.Schema({
    // Set the content as the type string and make it required
    content: {
        type: Array,
        required: true
    },
    // Set the date as the type date and use current date by default
    date: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        required: true
    }
})

// Export the above schema to the model so we can import them in index.js
module.exports = mongoose.model('TodoTask', calendarSchema);
