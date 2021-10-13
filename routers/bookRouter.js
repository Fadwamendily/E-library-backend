const bookController =require('../controllers/bookController');
const express=require('express');
const route= express.Router();
route.post('/addbook',bookController.createNewbook)
route.get('/allbook',bookController.getAllbooks)
route.get('/getbookbyid/:id',bookController.getbooksById)
route.get('/getbookbypublicationDate/:publicationDate',bookController.getbooksBypublicationDate)
route.get('/getbookbycatgory/:category',bookController.getBookbyCategory)
route.get('/getbookbysubject/:subject',bookController.getBookbySubject)
route.get('/getbookbyLanguage/:language',bookController.getBookbyLanguage)
route.delete('/deletebook/:id',bookController.deleteBook)
route.put('/updatebook/:id',bookController.updatebook)
route.delete('/removebook',bookController.removeallbooks)
module.exports=route;