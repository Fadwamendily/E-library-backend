const fileController =require('../controllers/fileController');
const express=require('express');
const route= express.Router();
const upload = require('../midlware/uploadFile')
route.post('/addfile', upload.single('photo'),fileController.createNewfile)
route.get('/allfile',fileController.getAllFiles)
route.get('/getfilebyid/:id',fileController.getfilesById)
route.get('/getfilebyType/:type',fileController.getfilesByType)
route.delete('/deletefile/:id',fileController.deletefile)
route.put('/updatefile/:id',fileController.updatefile)
route.delete('/removefile',fileController.removeallfiles)
module.exports=route;