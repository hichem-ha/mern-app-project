const user = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()


//--------------REGISTER------------//
exports.Register=async(req,res)=>{
    const {firstname , lastname , email , password ,gender } = req.body ;
try {
  //check email if exists
    const founduser = await user.findOne({email});
    if(founduser){
        return res.status(400).send({errors:[{msg:'This Email Already Exist'}]})
    }
    //add a new user
   const newuser =new user(req.body);
    //bcrypt the password
    const salt=10;
    const hashpassword=  bcrypt.hashSync(password,salt);
    newuser.password=hashpassword;
    // //add jwt
    const payload={id : newuser._id};
    const token = jwt.sign(payload,process.env.secretkey);

    await newuser.save();
    res.status(200).send({ msg :'registred with success',newuser , token});
} catch (error) {
    res.status(500).send({error:'could not register'});

}
}
//--------------LOGIN--------------//
exports.Login = async(req,res) => {
    const { email , password  } = req.body ;
    try {
      //check email if exists 
      const founduser = await user.findOne({email});
      if (!founduser)   {
        return res.status(400).send({errors:[{msg:'Bad Credentials'}]});
      }
      //decrypt the password
      const match = await bcrypt.compare(password, founduser.password);
      // compare password
      if (!match){
        return res.status(400).send({errors:[{msg:'Bad Credentials'}]});
      }
        //check jwt
        const payload={id : founduser._id };
     
        const token = jwt.sign(payload,process.env.secretkey);
      res.status(200).send({msg:'Loging With Success ', founduser , token});
   

    } catch (error) {
        res.status(500).send({errors:[{msg:'could not login'}]});
    }
};
 //---------GET CURRENT USER------------//
exports.current=async(req,res)=>{
    
        res.send({user:req.user})
    } 
