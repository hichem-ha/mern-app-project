const multer  = require('multer')
const storage = multer.diskStorage({
   destination :function(req,file,cb){
      cb(null,'../frontend/public')
   },
   filename: function(req,file,cd){
      cb(null , file.originalname)
   }
})
exports.upload = multer({storage:storage})