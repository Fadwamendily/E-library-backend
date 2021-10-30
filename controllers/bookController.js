const bookModel = require('../models/bookModel')
const path = require("path")
module.exports = {


    createNewbook: async (req, res) => {
        try {

            console.log("body : ",req.body)
            const image = req.files.photo[0].filename;
           req.body["image"]=image
            const file = req.files.file[0].originalname;
            const type = path.extname(file)
            req.body["file"] = {
                name: file,
                type: type
            }
            const book = new bookModel({
                user : req.user._id,
                image  : req.body.image ,
                file  : req.body.file,
                title  : req.body.title,
                price  : req.body.price,
                publicationDate  : req.body.publicationDate,
                category  : req.body.category,
                language  : req.body.language,

            
            });
            const result = await book.save();
            res.json({ message: 'new book created', data: result, status: 200 });
        } catch (error) {
            console.log(error.message);
            res.json({ message: 'error', data: error, status: 500 });
        }},


    getAllbooks: function (req, res) {
        bookModel.find({})
        .populate('user')
        .populate('language')
        .populate('category')
        .then(books => {

            res.json({ message: 'all books in system', size: books.length, data: books, status: 200 })
        })
        .catch(err => {

            res.json({ message: 'error get all books' + err, data: null, status: 500 })
        })
        
    },
    getbooksById: function (req, res) {
        bookModel.findById({ _id: req.params.id })
            .exec((err, book) => {
                if (err) {
                    res.json({ message: 'error get one book' + err, data: null, status: 500 })
                }
                else {
                    res.json({ message: ' book in system', data: book, status: 200 })

                }
            })
    },
    getbooksBypublicationDate: function (req, res) {
        bookModel.findOne({ publicationDate: req.params.publicationDate })
            .exec((err, book) => {
                if (err) {
                    res.json({ message: 'error get one book' + err, data: null, status: 500 })
                }
                else {
                    res.json({ message: ' book in system', data: book, status: 200 })

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
            res.json({ message: 'error', data: null, statut: 500 });
        }
    },

    updatebook: async (req, res) => {
        try {
            const result = await bookModel.updateOne({ _id: req.params.id }, req.body)
            res.json({ message: 'book updated', data: result, statut: 200 });
        } catch (error) {
            console.log(error.message);
            res.json({ message: 'error', data: null, statut: 500 });
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
    },
    getbooksbyuserid: (req, res) => {
        console.log('dfxgsg');
        bookModel.find({ user: req.user.id }, (err, books) => {
          console.log(books);
          if (err) {
            res.status(500).json({
              message : 'no book',
              data : []
            })
          } else {
            res.status(200).json({
              message:"user books",
              data: orders,
            });
          }
        })
      }
    
    }






