const mongoose = require ('mongoose')
const community= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
   picture:{
    
   },
   
    isAdmin:Boolean,
   createdby:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
 },
 createdby:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
 }
    
})
module.exports = mongoose.model('community',community);