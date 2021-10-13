const subjectController =require('../controllers/subjectContoller');
const express=require('express');
const route= express.Router();
route.post('/addsubject',subjectController.createNewsubject)
route.get('/allsubject',subjectController.getAllSubjects)
route.get('/getsubjectbyid/:id',subjectController.getSubjectsById)
route.delete('/deletesubject/:id',subjectController.deletesubject)
route.put('/updatesubject/:id',subjectController.updatesubject)
route.delete('/removesubject',subjectController.removeallsubjects)
module.exports=route;