const express = require ('express');
const { Register,Login ,current} = require('../controllers/authcontrollers');
const { Addcomment, Deletecomment, Updatecomment, Getcomments, GetOneComment } = require('../controllers/commentcontrollers');
const { Addcommunity, Getcommunities, Deletecommunity, Updatecommunity, Getcommunity, GetOnecommunities, GetOnecommunity, updateComProfileImage, updateComcoverImage } = require('../controllers/communitycontrollers');
const { Addpost, Deletepost, Updatepost, Getposts, Getpost, Likepost, Unlikepost} = require('../controllers/postcontrollers');
const {Addlike, Addunlike, Getlikes, likePost} = require('../controllers/likecontrollers');
const {Getusers, Deleteuser, Updateuser, updateProfileImage, updatecoverImage}=require('../controllers/profilecontrollers')
const {IsAuth} = require ('../middlewares/isAuth');
const {
    Validationlogin,
    Validationregister,
    Validation,
    Validationcommunity,
    Validationpost,
    Validationcomment,
  } = require("../Middlewares/validation");
const {upload} = require('../middlewares/upload');


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
userRoutes.get("/allusers",IsAuth,Getusers);
// DELETE USER
userRoutes.delete("/delete/:id", IsAuth,Deleteuser);
// UPDATE USER
userRoutes.put("/edit/:id", IsAuth,Updateuser);
// UPDATE PROFILE IMAGE
userRoutes.put('/uploadimage/:id',upload.single('profileImage') ,updateProfileImage)
// UPDATE PROFILE IMAGE
userRoutes.put('/uploadCoverimage/:id',upload.single('coverImage') ,updatecoverImage)
//------------COMMUNITY----------//
// ADD COMMUNITY :
userRoutes.post("/addcommunity/:id" ,Validationcommunity,Validation,Addcommunity);
// GET ALL COMMUNITIES :
userRoutes.get("/allcommunities",Getcommunities);
// GET ONE COMMUNITY :
userRoutes.get("/oneCommunity/:id", GetOnecommunity);

// DELETE COMMUNITY :
userRoutes.delete("/deletecommunity/:id",  Deletecommunity);
// UPDATE COMMUNITY :
userRoutes.put("/editcommunity/:id", Updatecommunity);
// UPDATE PROFILE IMAGE
userRoutes.put('/uploadComimage/:id',upload.single('profileImage'),updateComProfileImage)
// UPDATE COMMUNITY IMAGE
userRoutes.put('/uploadComCoverimage/:id',upload.single('coverImage'),updateComcoverImage)

//---------------POST-------------//
// ADD POST :
userRoutes.post("/addpost/:id/community/:id2",upload.single('image'),Validationpost,Validation,Addpost);//
// GET ALL POSTS :
userRoutes.get("/allposts", Getposts);
// GET ONE POST
userRoutes.get("/getOnePost/:id",Getpost);
// DELETE POST :
userRoutes.delete("/deletepost/:id",Deletepost);
// UPDATE POST :
userRoutes.put("/editpost/:id",upload.single('image'),Updatepost);
//LIKE POST :
userRoutes.post("/likepost/:id/post/:id2",Addlike);

//UNLIKE POST :
userRoutes.delete("/unlikepost/:id",IsAuth,Addunlike);



//--------------COMMENT--------------//
// ADD COMMENT:
userRoutes.post("/addcomment/:id/post/:id2",Validationcomment,Validation,Addcomment);
// GET ONE COMMENT :
userRoutes.get("/getcomment/:id",GetOneComment);
// GET ALL COMMENTS :
userRoutes.get("/allcomments", Getcomments);
// DELETE COMMENT :
userRoutes.delete("/deletecomment/:id", Deletecomment);
// UPDATE COMMENT :
userRoutes.put("/editcomment/:id",Updatecomment);







module.exports = userRoutes;
