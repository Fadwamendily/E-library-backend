const Route = require('express').Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('../passport_config');
const userController =  require('../controllers/user_controller')
const upload=require('../midlware/uploadFile')
//To sign JWT token before sending in cookie to Client


Route.post("/register", userController.register)


Route.post("/login", passport.authenticate('local', {session: false}),userController.login )


//Admin and normal user can access
Route.get("/protectedData", passport.authenticate('jwt', {session: false}),userController.protectedData)
//only Admin can access
Route.get("/admin/protectedData", passport.authenticate('jwt', {session: false}), userController.AdminprotectedData)


//Check auth status everytime front-end app refreshes
Route.get("/authenticated", passport.authenticate('jwt', {session: false}),userController.authenticated)
Route.get("/getme", passport.authenticate('jwt', {session: false}),userController.getme)

//Logout need authenticate first because only authenticated user that can log out.
Route.get("/logout", passport.authenticate('jwt', {session: false}), userController.logout)
Route.get('/allUser',passport.authenticate('jwt', {session: false}),userController.getAllUsers)
Route.get('/getUserbyid/:id',passport.authenticate('jwt', {session: false}),userController.getUserById)
Route.get('/getUserbyrole/:role',passport.authenticate('jwt', {session: false}),userController.getUserbyRole)
Route.delete('/deleteUserbyid/:id',passport.authenticate('jwt', {session: false}),userController.deleteUserById)
Route.put('/updateUserbyid/:id',passport.authenticate('jwt', {session: false}),userController.updateUserById)
Route.put('/avatar/:id',passport.authenticate('jwt', {session: false}),upload.single("image"),userController.uploadavatar);

module.exports = Route;