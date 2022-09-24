const mongoose = require ('mongoose')
const profile= new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    // image:{
    //    data:Buffer,
    //    contentType:String
    // }
   
    
})
module.exports = mongoose.model('profile',profile);