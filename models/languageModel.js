const mongoose = require('mongoose');
const LanguageSchema = new mongoose.Schema({
    language: {
        enum: ["Arabic','English", "French", "Spanish", "German", "Russian", "Italian", "Chinese", "Japanese"],
        required: true,
        type: String
    },})
module.exports = mongoose.model("Language", LanguageSchema)