const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({


    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        default: 'useravatar.png'
    },
    publicationDate: {
        type: Date,
        required: true
    },
    file: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "File"
    }],
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categorie"
    },
    languages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Language"
    }],
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject"
    }
})

module.exports = mongoose.model("Book", BookSchema);