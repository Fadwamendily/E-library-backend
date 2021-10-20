const mongoose = require('mongoose');
const FileSchema = new mongoose.Schema({
    type: {
        enum: ["pdf","audio", "printed"],
        required: true,
        type: String
    },
    name: {
        type: String,
        required: true
    },
    file: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("File", FileSchema)