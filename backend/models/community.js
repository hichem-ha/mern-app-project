const mongoose = require ('mongoose')
const community= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    profileImage:{
      type:String
  },
  coverImage:{
      type:String
  },
   description:{
    type:String,
    required:true,
   },
   

      posts :[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'post'
          }],

    ownerId:{
     type:mongoose.Schema.Types.ObjectId,
     ref:'user'
      },
    
})
module.exports = mongoose.model('community',community);