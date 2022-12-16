const mongoose = require ('mongoose')
const like= new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
      }
     
     

})
module.exports = mongoose.model('like',like);