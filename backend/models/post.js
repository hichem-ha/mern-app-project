const mongoose = require ('mongoose')
const post= new mongoose.Schema({
      creatorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
      },
      createdIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'community'
      },
    
      title:{
        type:String,
        required:true,
    },
    community:{
      type:String,
      required:true
    },

    body:{
        type:String,
        required:true,
    },
    // image:{
    //   type:String
    // },
    comments :[{
      type:mongoose.Schema.ObjectId,
      ref:'comment'
        }],

    //----------------------
     
    
    // likeCount:{ 
    //   type:Number, 
    //   default:0
    // },
     createdAt:{
        type:Date,
        default:Date.now
      }

    

      
   
    
})
module.exports = mongoose.model('post',post);