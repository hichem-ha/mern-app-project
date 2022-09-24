const { populate } = require('../models/comment');
const comment = require('../models/comment');
const post = require('../models/post');

//---------------ADD NEW COMMENT--------------//
exports.Addcomment = async (req, res) => {
    // const {textComment,postedIn,postedBy, } = req.body ;
    try {
      const myPost = await post.findById(req.params.id)
      const newcomment = new comment(req.body);
        await myPost.save();
      res.status(200).send({ msg: "comment added", newcomment });
    } catch (error) {
      console.log(error.stack)
      res.status(500).send(error);
    }
  };
  //---------------GET ALL COMMENTS--------------//
exports.Getcomments = async (req, res) => {
  try {
    const getcomments = await comment.find().populate({
      path:'postedBy',
      select:'firstname lastname'
    }).populate({
      path:'postedIn',
      select:'title'
    });
    res.status(200).send({ msg: "all comments", getcomments });
  } catch (error) {
    res.status(500).send("couldn't get comments ");
  }
};

  //------------DELETE COMMENT-------------//
  exports.Deletecomment = async (req, res) => {
    try {
      const delecomment = await comment.findByIdAndDelete(req.params.id);
      res.status(200).send({ msg: "comment deleted", delecomment });
    } catch (error) {
      res.status(500).send("could not delete comment");
    }
  };
  //-----------UPDATE COMMENT-----------------//
  exports.Updatecomment = async (req, res) => {
    try {
      const editcomment = await post.findByIdAndUpdate(
        req.body.postedIn,
        {
          $push: { comments:comment },
        },
        { new: true }
      )
      .populate({ 
       path:'postedIn',
       select:'_id name'}
       )
       .populate({
        path:'postedBy',
        select:'firstname lastname'
      })
      ;
      res.status(200).send({ msg: "comment updated", editcomment });
    } catch (error) {
      res.status(500).send("couldn't update comment");
    }
  };