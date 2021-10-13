const mongoose = require('mongoose')
const Schema = mongoose.Schema
var uniqueValidator = require('mongoose-unique-validator');
const commandeSchema = new Schema({
   
    totalPrice:{
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,////une seule relation entre commande et user (1)
        ref: "User"
    },

    book: [{
        type: mongoose.Schema.Types.ObjectId,////plsieur relation entre commande et user (1)
        ref: "Book"
    }]

},

    { timestamps: true },


)

module.exports = mongoose.model('commande', commandeSchema);