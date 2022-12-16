const like = require("../models/like");
const post = require("../models/post");
const user = require('../models/user');

//---------------ADD LIKE--------------//
exports.Addlike = async (req, res) => {
    
    try {
      const newlike = new like(req.body);
      const userId = await user.findById(req.params.id)
      if(!userId)
      {
        res.status(400).send({ msg: "no like added"});
      }
      newlike.userId  = req.params.id
       await newlike.save((err,result)=>{
         post.findById(req.params.id2 , (err,post)=>{
            if(err){
             console.log(err)
           } else
          {post?.likes?.push(result)
          post?.save()
        }
        res.status(200).send({ msg: "post liked", newlike });

         })

        });
        
       
    } catch (error) {
      res.status(500).send(error);
    }
   }
   

 //---------------DELETE LIKE--------------//

  exports.Addunlike = async (req, res) => {
    try {
    const likeFromDb = await like.findById(req.params.id)
    if (likeFromDb.userId.equals(req.user._id)){
    const unlike = await like.findByIdAndDelete(req.params.id)
    res.status(200).send({ msg: "like deleted", unlike });
    }else {
      res.status(400).send("u ar not allowed ");
    }    
      }
        catch (error) {
      res.status(500).send("could not delete like");

    }
  }
      
   //----------GET LIKES----------------//
   exports.Getlikes = async (req, res) => {
  
    try {
      const getlikes = await like.find().populate('userId')
      
      res.status(200).send({ msg: "all likes", getlikes });
    } catch (error) {
      res.status(500).send("couldn't get likes ");
    }
  };


