const community = require('../models/community');
const post = require('../models/post');
const user = require('../models/user');

//---------------ADD NEW POST--------------//
exports.Addpost = async (req, res) => {
  try {
    const newpost = new post(req.body);
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
      const getposts = await post.find().populate('comments').populate('createdIn','name')
      
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
      const editpost = await post.findByIdAndUpdate(
        req.params.id,
        {
          $set: { ...req.body },
        },
        { new: true }
      );
      res.status(200).send({ msg: "post updated", editpost });
    } catch (error) {
      res.status(500).send("couldn't update post");
    }
  };
 //-----------LIKES POST----------------//
 exports.Likespost = async (req, res) => {
  try {
    const like = await post.findById(req.params.id)
    if(!like)
    {
      res.status(400).send("couldn't likes post");
    }
    const likespost = await post.findByIdAndUpdate(
      req.params.id,
      {
        likeCount:post.likeCount +1
      },
      { new: true }
    );
    res.status(200).send({ msg: "post updated", likespost });
  } catch (error) {
    res.status(500).send("couldn't update post");
  }
};