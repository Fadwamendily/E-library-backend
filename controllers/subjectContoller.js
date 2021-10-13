const subjectModel = require('../models/subjectModel')
module.exports = {

    createNewsubject: async (req, res) => {
        try {
            const subject = new subjectModel(req.body);
            const result = await subject.save();
            res.json({ message: 'new subject created', data: result, statut: 200 });
        } catch (error) {
            console.log(error.message);
            res.json({ message: 'error', data: Null, statut: 500 });
        }
    },


    getAllSubjects:function(req,res){
        subjectModel.find({},(err,subjects)=>{
    if(err){
        res.json({message:'error get all subjects'+err, data:null,status:500})
    }
    else{
        res.json({message:'all subjects in system',size:subjects.length, data:subjects,status:200})
    
    }
        })
    },
    getSubjectsById:function(req,res){
        subjectModel.findById({_id:req.params.id})
        .exec((err,subject)=>{
            if(err){
                res.json({message:'error get one subject'+err, data:null,status:500})
            }
            else{
                res.json({message:' subject in system', data:subject,status:200})
    
            
            }
        })
    },
    

    deletesubject: async (req, res) => {
        try {
            const result = await subjectModel.findByIdAndDelete({ _id: req.params.id })
            res.json({ message: 'subject deleted', data: result, statut: 200 });
        } catch (error) {
            console.log(error.message);
            res.json({ message: 'error', data: Null, statut: 500 });
        }
    },

    updatesubject: async (req, res) => {
        try {
            const result = await subjectModel.updateOne({ _id: req.params.id }, req.body)
            res.json({ message: 'subject updated', data: result, statut: 200 });
        } catch (error) {
            console.log(error.message);
            res.json({ message: 'error', data: Null, statut: 500 });
        }
    },
    removeallsubjects: async (req, res) => {
        try {
            const result = await subjectModel.remove()
            res.send(result + " " + 'subjects removed successefly');
        } catch (error) {
            console.log(error.message);
            res.send(error + 'err');
        }
    }

}






