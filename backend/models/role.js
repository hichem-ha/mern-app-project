const mongoose = require ('mongoose');
const role= new mongoose.Schema({
    admin:[{
        type:ObjectId,
        ref:"user"
    }],
    user:[{
        type:ObjectId,
        ref:"user"
    }],
    role:{
    type:String,
    default:"user"
    }
  
   
    
})
module.exports = mongoose.model('role',role);