const mongoose = require ('mongoose');
const { number } = require('yargs');
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
        type:String
          },

    body:{
        type:String,
        required:true,
    },
    image:{
      type:String
    },
    comments :[{
      type:mongoose.Schema.ObjectId,
      ref:'comment'
        }],

    likes :[{ 
    type:mongoose.Schema.ObjectId,
      ref:'like'
        }],
    
  
     createdAt:{
        type:Date,
        default:Date.now
      }

    

      
   
    
})
module.exports = mongoose.model('post',post);