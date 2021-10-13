const bookModel = require('../models/bookModel')
module.exports = {

    createNewbook: async (req, res) => {
        try {
            const book = new bookModel(req.body);
            const result = await book.save();
            res.json({ message: 'new book created', data: result, statut: 200 });
        } catch (error) {
            console.log(error.message);
            res.json({ message: 'error', data: Null, statut: 500 });
        }
    },


    getAllbooks:function(req,res){
        bookModel.find({},(err,books)=>{
    if(err){
        res.json({message:'error get all books'+err, data:null,status:500})
    }
    else{
        res.json({message:'all books in system',size:books.length, data:books,status:200})
    
    }
        })
    },
    getbooksById:function(req,res){
        bookModel.findById({_id:req.params.id})
        .exec((err,book)=>{
            if(err){
                res.json({message:'error get one book'+err, data:null,status:500})
            }
            else{
                res.json({message:' book in system', data:book,status:200})

            }
        })
    },
    getbooksBypublicationDate:function(req,res){
        bookModel.findOne({publicationDate:req.params.publicationDate})
        .exec((err,book)=>{
            if(err){
                res.json({message:'error get one book'+err, data:null,status:500})
            }
            else{
                res.json({message:' book in system', data:book,status:200})

            }
        })
    },
    getBookbySubject: function (req, res) {

        bookModel.findOne({ subject: req.params.subject }, (err, book) => {
            if (err) {
                res.json({ message: 'error get one book' + err, data: null, status: 500 })
            } else {
                res.json({ message: 'one book in system', data: book, status: 200 })
            }
        })
    },
    getBookbyLanguage: function (req, res) {

        bookModel.findOne({ language: req.params.language }, (err, book) => {
            if (err) {
                res.json({ message: 'error get one book' + err, data: null, status: 500 })
            } else {
                res.json({ message: 'one book in system', data: book, status: 200 })
            }
        })
    },
    getBookbyCategory: function (req, res) {

        bookModel.findOne({ category: req.params.category }, (err, book) => {
            if (err) {
                res.json({ message: 'error get one book' + err, data: null, status: 500 })
            } else {
                res.json({ message: 'one book in system', data: book, status: 200 })
            }
        })
    },
    deleteBook: async (req, res) => {
        try {
            const result = await bookModel.findByIdAndDelete({ _id: req.params.id })
            res.json({ message: 'book deleted', data: result, statut: 200 });
        } catch (error) {
            console.log(error.message);
            res.json({ message: 'error', data: Null, statut: 500 });
        }
    },

    updatebook: async (req, res) => {
        try {
            const result = await bookModel.updateOne({ _id: req.params.id }, req.body)
            res.json({ message: 'book updated', data: result, statut: 200 });
        } catch (error) {
            console.log(error.message);
            res.json({ message: 'error', data: Null, statut: 500 });
        }
    },
    removeallbooks: async (req, res) => {
        try {
            const result = await bookModel.remove()
            res.send(result + " " + 'books removed successefly');
        } catch (error) {
            console.log(error.message);
            res.send(error + 'err');
        }
    }

}






