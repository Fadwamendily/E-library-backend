const commandeController =require('../controllers/commandeController');
const express=require('express');
const route= express.Router();
route.post('/addcommande',commandeController.createNewcommande)
route.get('/allcommande',commandeController.getAllcommandes)
route.get('/getcommandebyid/:id',commandeController.getcommandesById)
route.delete('/deletecommande/:id',commandeController.deletecommande)
route.put('/updatecommande/:id',commandeController.updatecommande)
route.delete('/removecommande',commandeController.removeallcommandes)
module.exports=route;