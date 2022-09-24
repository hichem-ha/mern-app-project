const post = require('../models/post');

//---------------ADD NEW POST--------------//
exports.Addpost = async (req, res) => {
  // const {title,body } = req.body ;
    try {
      const newpost = new post(req.body);
      await newpost.save();
      res.status(200).send({ msg: "post added", newpost });
    } catch (error) {
      res.status(500).send("couldn't add post");
    }
  };
  //---------------GET ALL POSTS--------------//
exports.Getposts = async (req, res) => {
    try {
      const getposts = await post.find().populate({
        path:'postedIn',
        select:'name'
      }).populate({
        path:'postedBy',
        select:'firstname lastname'
      });
      res.status(200).send({ msg: "all posts", getposts });
    } catch (error) {
      res.status(500).send("couldn't get posts ");
    }
  };
  //------------GET POST IN COMMUNITY------------//
  exports.Getpost = async (req, res) => {
    try {
      const getpost = await post.find({postedIn:req.community._id}).populate({
        path:'postedIn',
        select:'name'
      }).populate({
        path:'postedBy',
        select:'firstname lastname'
      });
      res.status(200).send({ msg: "community post", getpost });
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
 