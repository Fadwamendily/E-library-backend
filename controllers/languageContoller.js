const languageModel = require('../models/languageModel')
module.exports = {

    createNewlanguage: async (req, res) => {
        try {
            const language = new languageModel(req.body);
            const result = await language.save();
            res.json({ message: 'new language created', data: result, statut: 200 });
        } catch (error) {
            console.log(error.message);
            res.json({ message: 'error', data: Null, statut: 500 });
        }
    },


    getAllLanguages:function(req,res){
        languageModel.find({},(err,languages)=>{
    if(err){
        res.json({message:'error get all languages'+err, data:null,status:500})
    }
    else{
        res.json({message:'all languages in system',size:languages.length, data:languages,status:200})
    
    }
        })
    },
    getlanguagesById:function(req,res){
        languageModel.findById({_id:req.params.id})
        .exec((err,language)=>{
            if(err){
                res.json({message:'error get one language'+err, data:null,status:500})
            }
            else{
                res.json({message:' language in system', data:language,status:200})

            }
        })
    },

    deletelanguage: async (req, res) => {
        try {
            const result = await languageModel.findByIdAndDelete({ _id: req.params.id })
            res.json({ message: 'language deleted', data: result, statut: 200 });
        } catch (error) {
            console.log(error.message);
            res.json({ message: 'error', data: Null, statut: 500 });
        }
    },

    updatelanguage: async (req, res) => {
        try {
            const result = await languageModel.updateOne({ _id: req.params.id }, req.body)
            res.json({ message: 'language updated', data: result, statut: 200 });
        } catch (error) {
            console.log(error.message);
            res.json({ message: 'error', data: Null, statut: 500 });
        }
    },
    removeallLanguages: async (req, res) => {
        try {
            const result = await languageModel.remove()
            res.send(result + " " + 'languages removed successefly');
        } catch (error) {
            console.log(error.message);
            res.send(error + 'err');
        }
    }

}






