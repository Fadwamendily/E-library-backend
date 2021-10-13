const mongoose = require('mongoose');
const SubjectSchema = new mongoose.Schema({
    subject: {
        enum: ["Arts", "Animals", "Fiction", "Science & Mathematics", "Business & Finance", "Biography", "Health & Wellness", "History", "Places"],
        required: true,
        type: String
    }})
    module.exports = mongoose.model("Subject",SubjectSchema);