const express = require ('express');
const { Register,Login ,current} = require('../controllers/authcontrollers');
const { Addcomment, Deletecomment, Updatecomment, Getcomments } = require('../controllers/commentcontrollers');
const { Addcommunity, Getcommunities, Deletecommunity, Updatecommunity } = require('../controllers/communitycontrollers');
const { Addpost, Deletepost, Updatepost, Getposts, Likepost, Getpost } = require('../controllers/postcontrollers');
const {Getusers, Deleteuser, Updateuser}=require('../controllers/profilecontrollers')
const {IsAuth} = require ('../middlewares/isAuth');
const {admin} = require ('../middlewares/admin');
const {
    Validationlogin,
    Validationregister,
    Validation,
    Validationcommunity,
    Validationpost,
    Validationcomment,
  } = require("../Middlewares/validation");
const userRoutes = express.Router();

//--------AUTH--------//
// REGISTER
userRoutes.post('/register' , Validationregister, Validation,Register);
// LOGIN
userRoutes.post('/login' , Validationlogin, Validation ,Login);
//GET CURRENT USER
userRoutes.get('/current' , IsAuth ,current );
//-------------USER------------//
// GET ALL USERS
userRoutes.get("/all",Getusers);
// DELETE USER
userRoutes.delete("/delete/:id", IsAuth,Deleteuser);
// UPDATE USER
userRoutes.put("/edit/:id", IsAuth,Updateuser);
//------------COMMUNITY----------//
// ADD COMMUNITY
userRoutes.post("/addcommunity",IsAuth,Validationcommunity,Validation,Addcommunity);
// GET ALL COMMUNITIES 
userRoutes.get("/allcommunities", Getcommunities);
// DELETE COMMUNITY
userRoutes.delete("/deletecommunity/:id", [IsAuth, admin],Deletecommunity);
// UPDATE COMMUNITY 
userRoutes.put("/editcommunity/:id",[IsAuth, admin] ,Updatecommunity);
//---------------POST-------------//
// ADD POST
userRoutes.post("/addpost",Validationpost,Validation,Addpost);
// GET ALL POSTS
userRoutes.get("/allposts", Getposts);
// GET COMMUNITY POSTS
userRoutes.get("/communityposts",IsAuth ,Getpost);
// DELETE POST
userRoutes.delete("/deletepost/:id", [IsAuth, admin],Deletepost);
// UPDATE POST
userRoutes.put("/editpost/:id", IsAuth,Updatepost);

//--------------COMMENT--------------//
// ADD COMMENT
userRoutes.post("/addcomment", Validationcomment,Validation,Addcomment);
// GET ALL COMMENTS
userRoutes.get("/allcomments", Getcomments);
// DELETE COMMENT
userRoutes.delete("/deletecomment/:id", [IsAuth, admin],Deletecomment);
// UPDATE COMMENT
userRoutes.put("/editcomment/:id",IsAuth,Updatecomment);







module.exports = userRoutes;
