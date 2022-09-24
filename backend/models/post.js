const mongoose = require ('mongoose')
const post= new mongoose.Schema({
      postedBy:{
        type:mongoose.Schema.ObjectId,
        ref:'user'
      },
      // like:{
      //   type:String,
      //    required:true
      //  },
      postedIn:{
        type:mongoose.Schema.ObjectId,
         ref:'community'
      },
    title:{
        type:String,
        required:true,
    },

    body:{
        type:String,
        required:true,
    },

    // // image:{
    // //     data:Buffer,
    // //    contentType:String 
    // // },
    //----------------------
    comments :[{ type:mongoose.Schema.ObjectId, ref:'comment'}],
    
    // likes:[{ type:mongoose.Schema.ObjectId, ref:'like'}],

      createdAt:{
        type:Date,
        default:Date.now
      }

    

      
   
    
})
module.exports = mongoose.model('post',post);