const comment = require('../models/comment');
const post = require('../models/post');
const user = require('../models/user');

//---------------ADD NEW COMMENT--------------//
exports.Addcomment = async (req, res) => {
    
    try {
      const newcomment = new comment(req.body);
      const creatorId = await user.findById(req.params.id)
      if(!creatorId)
      {
        res.status(400).send({ msg: "no comment added"});
      }
      newcomment.creatorId  = req.params.id
        await newcomment.save((err,result)=>{
         post.findById(req.params.id2 , (err,post)=>{
            if(err){
             console.log(err)
           }else
           { post?.comments?.push(result)
             post?.save()
           }
         })
        });
        res.status(200).send({ msg: "comment added", newcomment });
       
    } catch (error) {
      res.status(500).send(error);
    }
  };
//-----------------
exports.GetOneComment = async (req, res) => {
  try {
    const getcomment = await comment.findById(req.params.id)
    .populate('comments','title , id')
    res.status(200).send({ msg: "get comment ", getcomment});
  } catch (error) {
    res.status(500).send("couldn't get comment ");
  }
};

  //---------------GET ALL COMMENTS--------------//

exports.Getcomments = async (req, res) => {
  try {
    const getcomments = await comment.find()
    .populate('creatorId','firstname lastname')
    res.status(200).send({ msg: "all comments", getcomments});
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