const categoryModel = require('../models/categoryModel')
module.exports = {

    createNewcategory: async (req, res) => {
        try {
            const categorie = new categoryModel(req.body);
            const result = await categorie.save();
            res.json({ message: 'new category created', data: result, statut: 200 });
        } catch (error) {
            console.log(error.message);
            res.json({ message: 'error', data: Null, statut: 500 });
        }
    },


    getAllcategories:function(req,res){
        categoryModel.find({},(err,categorys)=>{
    if(err){
        res.json({message:'error get all categories'+err, data:null,status:500})
    }
    else{
        res.json({message:'all categories in system',size:categorys.length, data:categorys,status:200})
    
    }
        })
    },
    getcategoryById:function(req,res){
        categoryModel.findById({_id:req.params.id})
        .exec((err,category)=>{
            if(err){
                res.json({message:'error get one category'+err, data:null,status:500})
            }
            else{
                res.json({message:' category in system', data:category,status:200})

            }
        })
    },

    deletecategory: async (req, res) => {
        try {
            const result = await categoryModel.findByIdAndDelete({ _id: req.params.id })
            res.json({ message: 'category deleted', data: result, statut: 200 });
        } catch (error) {
            console.log(error.message);
            res.json({ message: 'error', data: Null, statut: 500 });
        }
    },

    updatecategory: async (req, res) => {
        try {
            const result = await categoryModel.updateOne({ _id: req.params.id }, req.body)
            res.json({ message: 'category updated', data: result, statut: 200 });
        } catch (error) {
            console.log(error.message);
            res.json({ message: 'error', data: Null, statut: 500 });
        }
    },
    removeallcategories: async (req, res) => {
        try {
            const result = await categoryModel.remove()
            res.send(result + " " + 'categories removed successefly');
        } catch (error) {
            console.log(error.message);
            res.send(error + 'err');
        }
    }

}






