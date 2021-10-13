const fileModel = require('../models/fileModel')
module.exports = {

    createNewfile: async (req, res) => {
        try {
            const file = new fileModel(req.body);
            const result = await file.save();
            res.json({ message: 'new file created', data: result, statut: 200 });
        } catch (error) {
            console.log(error.message);
            res.json({ message: 'error', data: Null, statut: 500 });
        }
    },


    getAllFiles:function(req,res){
        fileModel.find({},(err,files)=>{
    if(err){
        res.json({message:'error get all files'+err, data:null,status:500})
    }
    else{
        res.json({message:'all files in system',size:files.length, data:files,status:200})
    
    }
        })
    },
    getfilesById:function(req,res){
        fileModel.findById({_id:req.params.id})
        .exec((err,file)=>{
            if(err){
                res.json({message:'error get one file'+err, data:null,status:500})
            }
            else{
                res.json({message:' file in system', data:file,status:200})

            }
        })
    },
    getfilesByType:function(req,res){
        fileModel.findOne({type:req.params.type})
        .exec((err,file)=>{
            if(err){
                res.json({message:'error get one file'+err, data:null,status:500})
            }
            else{
                res.json({message:' file in system', data:file,status:200})

            }
        })
    },
    deletefile: async (req, res) => {
        try {
            const result = await fileModel.findByIdAndDelete({ _id: req.params.id })
            res.json({ message: 'file deleted', data: result, statut: 200 });
        } catch (error) {
            console.log(error.message);
            res.json({ message: 'error', data: Null, statut: 500 });
        }
    },

    updatefile: async (req, res) => {
        try {
            const result = await fileModel.updateOne({ _id: req.params.id }, req.body)
            res.json({ message: 'file updated', data: result, statut: 200 });
        } catch (error) {
            console.log(error.message);
            res.json({ message: 'error', data: Null, statut: 500 });
        }
    },
    removeallfiles: async (req, res) => {
        try {
            const result = await fileModel.remove()
            res.send(result + " " + 'file removed successefly');
        } catch (error) {
            console.log(error.message);
            res.send(error + 'err');
        }
    }

}






