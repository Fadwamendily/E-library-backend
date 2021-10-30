const categoryController =require('../controllers/categoryContoller');
const express=require('express');
const upload = require('../midlware/uploadFile')

const route= express.Router();
route.post('/addcategory', upload.single('image'),categoryController.createNewcategory)
route.get('/allcategory',categoryController.getAllcategories)
route.get('/getcategorybyid/:id',categoryController.getcategoryById)
route.delete('/deletecategory/:id',categoryController.deletecategory)
route.put('/updatecategory/:id',categoryController.updatecategory)
route.delete('/removecategory',categoryController.removeallcategories)
module.exports=route;