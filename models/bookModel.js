const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
    name: String,
    type: String,
    
})

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
        required: true

    },
    publicationDate: {
        type: Date,
        required: true
    },
    file: FileSchema ,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categorie"
    },
    language: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Language"
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

})

module.exports = mongoose.model("Book", BookSchema);