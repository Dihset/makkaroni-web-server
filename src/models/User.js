const mongoose = require('mongoose');
export const User = mongoose.model('User', new mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    about: String,
    grade: Number,
    location: Array,
}));
