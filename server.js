const express = require('express');
const app = express();
const userRouter = require('./routers/userRouter');
const categoryRouter = require('./routers/categoryRouter');
const bookRouter = require('./routers/bookRouter');
const subjectRouter = require('./routers/subjectRouter');
const languageRouter = require('./routers/languageRouter');
const commandeRouter = require('./routers/commandeRouter');
const fileRouter = require('./routers/fileRouter');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const database = require('./config/database')


//Middleware Setup

app.use(cookieParser())    //<----- This middleware is needed to read Cookie from request. Without it, we'll get no req.cookie...
app.use(express.json())    //<----- this middleware is needed to read JSON from request. Without it, we'll get req.body == undefined.

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

app.use("/users", userRouter);
app.use("/categories", categoryRouter);
app.use("/languages", languageRouter);
app.use("/subjects", subjectRouter);
app.use("/books", bookRouter);
app.use("/commandes", commandeRouter);
app.use("/files", fileRouter);


app.get("/getfile/:image", function (req, res) {
    res.sendFile(__dirname + "/uploads/" + req.params.image);
});
// express doesn't consider not found 404 as an error so we need to handle 404 explicitly
// handle 404 error
app.use(function(req,res, next) {
    let err = new Error();
       err.status = 404;
       next(err);
   });
   // handle errors
   app.use(function(err, req, res, next) {
    console.log(err);
     if(err.status === 404)
      res.status(404).json({message: " Path Not found"});
     else 
       res.status(500).json({message: "Something looks wrong "});
   });
app.listen("5000", () =>{
    console.log("Server listening at port 5000")
})