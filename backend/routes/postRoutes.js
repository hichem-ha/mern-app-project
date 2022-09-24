// const express = require ('express');

// const { Addpost, Getposts, Deletepost, Updatepost } = require("../controllers/postcontrollers");
// const { IsAuth } = require("../middlewares/isAuth");
// const { Validationpost, Validation } = require("../middlewares/validation");

// const userRoutes = express.Router();

// //---------------POST-------------//
// // ADD POST
// userRoutes.post("/addpost", Validationpost,Validation,Addpost);
// // GET ALL POSTS
// userRoutes.get("/allposts", Getposts);
// // DELETE POST
// userRoutes.delete("/deletepost/:id", [IsAuth, admin],Deletepost);
// // UPDATE POST
// userRoutes.put("/editpost/:id", IsAuth,Updatepost);