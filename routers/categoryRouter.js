const categoryController =require('../controllers/categoryContoller');
const express=require('express');
const route= express.Router();
route.post('/addcategory',categoryController.createNewcategory)
route.get('/allcategory',categoryController.getAllcategories)
route.get('/getcategorybyid/:id',categoryController.getcategoryById)
route.delete('/deletecategory/:id',categoryController.deletecategory)
route.put('/updatecategory/:id',categoryController.updatecategory)
route.delete('/removecategory',categoryController.removeallcategories)
module.exports=route;