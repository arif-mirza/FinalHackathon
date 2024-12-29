const mongoose = require('mongoose');
const EventSchema = new mongoose.Schema({
    id: { type: String, required: false },  // Optional field
    title: { type: String, required: true }, // Required field
    description: { type: String, required: true },
    location: { type: String, required: false },
    date: { type: Date, required: true },
    category: { type: String, required: true }
});
const Event = mongoose.model('Event', EventSchema);

module.exports = Event;