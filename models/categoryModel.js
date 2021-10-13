const mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema({

    category: {
        enum: ["Classic Books", "Books We Love", "Recently Returned", "Romance", "Kids", "Thrillers", "Textbooks"],
        required: true,
        type: String
    }
})
module.exports = mongoose.model("Categorie", CategorySchema);