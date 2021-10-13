//DB Connection
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/onlinebibliotheque", {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("DB connected successfully...")
})
