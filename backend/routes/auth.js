const express = require ('express');
const { Register,Login ,current} = require('../controllers/authcontrollers');
const { Addcomment, Deletecomment, Updatecomment, Getcomments, GetOneComment } = require('../controllers/commentcontrollers');
const { Addcommunity, Getcommunities, Deletecommunity, Updatecommunity, Getcommunity, GetOnecommunities, GetOnecommunity } = require('../controllers/communitycontrollers');
const { Addpost, Deletepost, Updatepost, Getposts, Getpost, Likespost } = require('../controllers/postcontrollers');
const {Getusers, Deleteuser, Updateuser}=require('../controllers/profilecontrollers')
const {IsAuth} = require ('../middlewares/isAuth');
const {isAdmin, canDeletePost, canEditPost, canDeletecomment, canEditcomment} = require ('../middlewares/admin');

const {
    Validationlogin,
    Validationregister,
    Validation,
    Validationcommunity,
    Validationpost,
    Validationcomment,
  } = require("../Middlewares/validation");
const { upload } = require('../middlewares/upload');

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
userRoutes.get("/all",IsAuth,Getusers);
// DELETE USER
userRoutes.delete("/delete/:id", IsAuth,Deleteuser);
// UPDATE USER
userRoutes.put("/edit/:id", IsAuth,Updateuser);

//------------COMMUNITY----------//
// ADD COMMUNITY
userRoutes.post("/addcommunity/:id",IsAuth,Validationcommunity,Validation,Addcommunity);
// GET ALL COMMUNITIES 
userRoutes.get("/allcommunities", IsAuth,Getcommunities);
// GET ONE COMMUNITY
userRoutes.get("/oneCommunity/:id", IsAuth,GetOnecommunity);

// DELETE COMMUNITY
userRoutes.delete("/deletecommunity/:id", IsAuth,isAdmin, Deletecommunity);
// UPDATE COMMUNITY 
userRoutes.put("/editcommunity/:id",IsAuth, isAdmin, Updatecommunity);

//---------------POST-------------//
// ADD POST
userRoutes.post("/addpost/:id/community/:id2",IsAuth,Validationpost,Validation,Addpost);//upload.single('image'),
// GET ALL POSTS
userRoutes.get("/allposts", IsAuth,Getposts);
// GET ONE POST
userRoutes.get("/getOnePost/:id",IsAuth ,Getpost);
// DELETE POST
userRoutes.delete("/deletepost/:id", IsAuth,canDeletePost,Deletepost);
// UPDATE POST
userRoutes.put("/editpost/:id",IsAuth,canEditPost,Updatepost);
//LIKE POST
userRoutes.patch("/likespost/:id",IsAuth,Likespost);


//--------------COMMENT--------------//
// ADD COMMENT:
userRoutes.post("/addcomment/:id/post/:id2", IsAuth,Validationcomment,Validation,Addcomment);
//
userRoutes.get("/getcomment/:id", IsAuth,GetOneComment);
// GET ALL COMMENTS
userRoutes.get("/allcomments", IsAuth,Getcomments);
// DELETE COMMENT
userRoutes.delete("/deletecomment/:id", IsAuth,canDeletecomment,Deletecomment);
// UPDATE COMMENT
userRoutes.put("/editcomment/:id",IsAuth,canEditcomment,Updatecomment);







module.exports = userRoutes;
