const mongoose = require ('mongoose')
const comment= new mongoose.Schema({
         textComment :{
             type:String,
         },
         postedIn:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'post'
            },
         postedBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'user'

              },
         createdAt:{
            type:Date,
            default:Date.now
          },
    
})
module.exports = mongoose.model('comment',comment);