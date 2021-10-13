const userModel = require('../models/user_model')
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('../passport_config');


function signToken(userID) {
    return jwt.sign({
        iss: 'moonServer',
        sub: userID
    }, 'secret', { expiresIn: '1h' })
}

module.exports = {
    register: (req, res) => {
        const { email, password, role } = req.body;

        userModel.findOne({ email }, function (err, user) {
            if (err)
                return res.status(500).json({ msg: err.message, error: true })
            if (user)
                return res.status(400).json({ msg: "User already exist", error: true })
            else {
                const newUser = new userModel(req.body)

                newUser.save((err, user) => {
                    if (err)
                        return res.status(500).json({ msg: err.message, error: true })
                    else {
                        const token = signToken(user.id);
                        //httpOnly prevents XSS (read in my authentication doc for more info)
                        res.cookie("access_token", token, { maxAge: 3600 * 1000, httpOnly: true, sameSite: true });

                        return res.status(200).json({ isAuthenticated: true, user: { email, role }, error: false })
                    }
                })
            }
        })
    },
    login: (req, res) => {
        const { id, email, role } = req.user;
        const token = signToken(id);

        res.cookie("access_token", token, { maxAge: 3600 * 1000, httpOnly: true, sameSite: true });

        return res.status(200).json({ isAuthenticated: true, user: { email, role } })
    },


    protectedData: (req, res) => {
        return res.status(200).json({ data: "Protected data...hehehe" })
    },


    AdminprotectedData: (req, res) => {
        const { role } = req.user;
        if (role === "admin")
            return res.status(200).json({ data: "Admin Protected data...hehehe" })
        return res.status(403).json({ data: "" })
    },


    authenticated: (req, res) => {
        const { email, role } = req.user;
        return res.status(200).json({ isAuthenticated: true, user: { email, role } })
    },


    logout: (req, res) => {
        res.clearCookie("access_token");
        return res.status(200).json({ success: true, user: { email: "", role: "" } })
    },

    getAllUsers:function(req,res){
        userModel.find({},(err,users)=>{
    if(err){
        res.json({message:'error get all users'+err, data:null,status:500})
    }
    else{
        res.json({message:'all users in system',size:users.length, data:users,status:200})
    
    }
        })
    },
    getUserById:function(req,res){
        userModel.findById({_id:req.params.id})
        .exec((err,user)=>{
            if(err){
                res.json({message:'error get one user'+err, data:null,status:500})
            }
            else{
                res.json({message:' user in system', data:user,status:200})
    
            
            }
        })
    },
    
    getUserbyRole: function (req, res) {

        userModel.findOne({ role: req.params.role }, (err, User) => {
            if (err) {
                res.json({ message: 'error get one User' + err, data: null, status: 500 })
            } else {
                res.json({ message: 'one User in system', data: User, status: 200 })
            }
        })
    },

    deleteUserById: function (req, res) {
        userModel.findByIdAndDelete({ _id: req.params.id }, (err, User) => {

            if (err) { res.json({ message: 'error delete  one User' + err, data: null, status: 500 }) }
            else { res.json({ message: 'one User delete system', data: User, status: 200 }) }
        })
    },


    updateUserById: (req, res) => {
        userModel.findOneAndUpdate({ _id: req.params.id }, req.body, (err, user) => {
            if (!user) {
                res.status(500).json({
                    message: "user not updated ",
                    data: null,
                });
            } else {
                res.status(200).json({
                    message: "user updated successfuly ",
                    data: user,
                });
            }
        });
    },
    uploadavatar: (req, res) => {
        const data = {
            avatar: req.file.filename,
        };

        userModel.findByIdAndUpdate({ _id: req.params.id }, data, (err, user) => {
            if (err) {
                res.status(500).json({ message: "avatar not uploaded" });
            } else {
                userModel.findById({ _id: user.id }, (err, user) => {
                    if (err) {
                        res.json("error");
                    } else {
                        res.status(200).json({
                            message: "user updated",
                            data: user,
                        });
                    }
                });
            }
        });
    },

}






