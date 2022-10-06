exports.isAdmin = async (req,res,next) => {
  if(  req.community.ownerId!=req.user._id ) {
       return res.status(400).send('you are not allowed');
   }
 next();
 }
 exports.canDeletePost = async (req,res,next) => {
  
   if((req.community.ownerId != req.user._id)&&( req.post.creatorId != req.user._id)) {
       return res.status(400).send('you are not allowed');
   }
 next();
 }
 exports.canEditPost = async (req,res,next) => {
  
   if(req.post.creatorId!= req.user._id ) {
       return res.status(400).send('you are not allowed');
   }
 next();
 }
 exports.canDeletecomment = async (req,res,next) => {
  
   if((req.community.ownerId != req.user._id)&&( req.comment.creatorId != req.user._id)) {
       return res.status(400).send('you are not allowed');
   }
 next();
 }
 exports.canEditcomment = async (req,res,next) => {
  
   if(req.comment.creatorId!= req.user._id ) {
       return res.status(400).send('you are not allowed');
   }
 next();
 }
 
 
 