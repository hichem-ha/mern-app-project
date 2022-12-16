const community = require('../models/community');
const post = require('../models/post');
const user = require('../models/user');

//---------------ADD NEW POST--------------//
exports.Addpost = async (req, res) => {
  
  try {
    const newpost = new post({...req.body, image: req.file && req.file.filename || null  }); 
    const creator = await user.findById(req.params.id)
    if(!creator)
    {
      res.status(400).send({ msg: "no post added"});
    }
    newpost.creatorId  = req.params.id
    const  createdIn = await community.findById(req.params.id2)
    if(!createdIn)
    {
      res.status(400).send({ msg: "no post added"});
    }
    newpost.createdIn  = req.params.id2
      await newpost.save((err,result)=>{
        community.findById( req.params.id2 ,(err,myCommunity)=>{
           if(err){
            console.log(err)
          }else{
            myCommunity?.posts?.push(result) 
          
            myCommunity?.save()
          }
        });
       })
    res.status(200).send({ msg: "post added", newpost });
  } catch (error) {
    console.log(error)
    res.status(500).send("couldn't add post");
  }
};
  //---------------GET ALL POSTS--------------//
exports.Getposts = async (req, res) => {
  
    try {
      const getposts = await post.find().populate('comments').populate('createdIn').populate('creatorId').populate('likes')
      
      res.status(200).send({ msg: "all posts", getposts });
    } catch (error) {
      res.status(500).send("couldn't get posts ");
    }
  };
  //------------GET ONE POST ------------//
  exports.Getpost = async (req, res) => {
    try {
      const getpost = await post.findById(req.params.id).populate('createdIn','name')
      res.status(200).send({ msg: "get post", getpost });
    } catch (error) {
      res.status(500).send("couldn't get post ");
    }
      };
  //------------DELETE POST-------------//
  exports.Deletepost = async (req, res) => {
    try {
      
      const delepost = await post.findByIdAndDelete(req.params.id);
      res.status(200).send({ msg: "post deleted", delepost });
    } catch (error) {
      res.status(500).send("could not delete post");
    }
  };
  //-----------UPDATE POST-----------------//
  exports.Updatepost = async (req, res) => {
    try {
      const getposts  = await post.findByIdAndUpdate(
        req.params.id,
        {
          $set: {...req.body, image: req.file && req.file.filename || null },
        },
        { new: true }
      );
      res.status(200).send({ msg: "post updated", getposts  });
    } catch (error) {
      res.status(500).send("couldn't update post");
    }
  };
 //-----------LIKES POST----------------//
 exports.Likepost = async (req, res) => {
  
  try {
    const getposts = await post.findByIdAndUpdate(
      req.body.postId,
      {
       $push:{likes:req.user._id}
      },
      { new: true }
    );
    res.status(200).send({ msg: "post updated", getposts });
  } catch (error) {
    res.status(500).send("couldn't update post");
  }
};
 //-----------UNLIKES POST----------------//
 exports.Unlikepost = async (req, res) => {
  
  try {
    const getposts = await post.findByIdAndUpdate(
      req.body.postId,
      {
       $pull:{likes:req.user._id}
      },
      { new: true }
    );
    res.status(200).send({ msg: "post updated", getposts });
  } catch (error) {
    res.status(500).send("couldn't update post");
  }
};