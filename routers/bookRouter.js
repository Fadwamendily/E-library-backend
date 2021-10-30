const bookController =require('../controllers/bookController');
const express=require('express');
const upload = require('../midlware/uploadFile')
const passport = require('passport');
require('../passport_config');

const route= express.Router();
route.post('/addbook', passport.authenticate('jwt', {session: false}) ,  upload.fields([{
    name: 'photo', maxCount: 1
  },{
    name: 'file', maxCount: 1
  }]),bookController.createNewbook)///////bonjour
route.get('/allbook',bookController.getAllbooks)
route.get('/getbookbyid/:id',passport.authenticate('local', {session: false}),bookController.getbooksById)
route.get('/getbookbypublicationDate/:publicationDate',passport.authenticate('local', {session: false}),bookController.getbooksBypublicationDate)
route.get('/getbookbycatgory/:category',passport.authenticate('local', {session: false}),bookController.getBookbyCategory)
route.get('/getbookbysubject/:subject',passport.authenticate('local', {session: false}),bookController.getBookbySubject)
route.get("/user",passport.authenticate('local', {session: false}), bookController.getbooksbyuserid);
route.get('/getbookbyLanguage/:language',passport.authenticate('local', {session: false}),bookController.getBookbyLanguage)
route.delete('/deletebook/:id',passport.authenticate('local', {session: false}),bookController.deleteBook)
route.put('/updatebook/:id',passport.authenticate('local', {session: false}),bookController.updatebook)
route.delete('/removebook',passport.authenticate('local', {session: false}),bookController.removeallbooks)
module.exports=route;