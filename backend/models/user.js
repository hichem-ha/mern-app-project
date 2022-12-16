const mongoose = require ('mongoose')
const user= new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    // birthday:{
    //     type:String,
    //     required:true,
        
    // },
    password:{
       type:String,
       required:true
    },
    gender:{
        type:String,
        required:true
    },
    profileImage:{
        type:String
    },
    coverImage:{
        type:String
    },
  
    
})
module.exports = mongoose.model('user',user);