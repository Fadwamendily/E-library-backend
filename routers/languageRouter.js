const languageController =require('../controllers/languageContoller');
const express=require('express');
const route= express.Router();
route.post('/addlanguage',languageController.createNewlanguage)
route.get('/alllanguage',languageController.getAllLanguages)
route.get('/getlanguagebyid/:id',languageController.getlanguagesById)
route.delete('/deletelanguage/:id',languageController.deletelanguage)
route.put('/updatelanguage/:id',languageController.updatelanguage)
route.delete('/removelanguage',languageController.removeallLanguages)
module.exports=route;