const mongoose = require ('mongoose');


const comment= new mongoose.Schema({
    creatorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
      },
     textComment:{
       type:String,
       required:true

       },
      createdAt:{
        type:Date,
        default:Date.now
      }

    

      
   
    
})
module.exports = mongoose.model('comment',comment);