const commandeModel = require('../models/commandeModel')
module.exports = {

    createNewcommande: async (req, res) => {
        try {
            const commande = new commandeModel(req.body);
            const result = await commande.save();
            res.json({ message: 'new commande created', data: result, statut: 200 });
        } catch (error) {
            console.log(error.message);
            res.json({ message: 'error', data: null, statut: 500 });
        }
    },


    getAllcommandes:function(req,res){
        commandeModel.find({},(err,commandes)=>{
    if(err){
        res.json({message:'error get all commandes'+err, data:null,status:500})
    }
    else{
        res.json({message:'all commandes in system',size:commandes.length, data:commandes,status:200})
    
    }
        })
    },
    getcommandesById:function(req,res){
        commandeModel.findById({_id:req.params.id})
        .exec((err,commande)=>{
            if(err){
                res.json({message:'error get one commande'+err, data:null,status:500})
            }
            else{
                res.json({message:' commande in system', data:commande,status:200})

            }
        })
    },

    deletecommande: async (req, res) => {
        try {
            const result = await commandeModel.findByIdAndDelete({ _id: req.params.id })
            res.json({ message: 'commande deleted', data: result, statut: 200 });
        } catch (error) {
            console.log(error.message);
            res.json({ message: 'error', data: null, statut: 500 });
        }
    },

    updatecommande: async (req, res) => {
        try {
            const result = await commandeModel.updateOne({ _id: req.params.id }, req.body)
            res.json({ message: 'commande updated', data: result, statut: 200 });
        } catch (error) {
            console.log(error.message);
            res.json({ message: 'error', data: null, statut: 500 });
        }
    },
    removeallcommandes: async (req, res) => {
        try {
            const result = await commandeModel.remove()
            res.send(result + " " + 'All commandes removed successefly');
        } catch (error) {
            console.log(error.message);
            res.send(error + 'err');
        }
    }

}






