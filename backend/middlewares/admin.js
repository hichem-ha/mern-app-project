   //--------LIKES CONDITION--------------//

const post = require("../models/post");

exports.likepost = async (req,res,next) => {

  const postFromDb = await post.findById(req.params.id);
console.log('post :',postFromDb)
  if(postFromDb?.likes?.userId.equals(req.user._id)) {
      return res.status(400).send('you has already like this post');
  }
next();
}
 
 
 