const user = require('../models/user');
//---------------GET ALL USERS--------------//
exports.Getusers = async (req, res) => {
    try {
      const getusers = await user.find();
      res.status(200).send({ msg: "all users", getusers });
      
    } catch (error) {
      res.status(500).send("couldn't get users");
    }
  };
  //------------DELETE USER-------------//
  exports.Deleteuser = async (req, res) => {
    try {
      const deleuser = await user.findByIdAndDelete(req.params.id);
      res.status(200).send({ msg: "user deleted", deleuser });
    } catch (error) {
      res.status(500).send("could not delete user");
    }
  };
  //-----------UPDATE USER-----------------//
  exports.Updateuser = async (req, res) => {
    try {
      const edituser = await user.findByIdAndUpdate(
        req.params.id,
        {
          $set: { ...req.body },
        },
        { new: true }
      );
      res.status(200).send({ msg: "user updated", edituser });
    } catch (error) {
      res.status(500).send("couldn't update user");
    }
  };

  //-----------UPDATE Image-----------------//

  exports.updateProfileImage=async(req,res)=>{
 
  try {
  const  userimg = await user.findByIdAndUpdate(
    req.params.id ,
    {$set:{...req.body,profileImage:req.file.filename}}
 
    )
     res.status(200).send({msg:"image added",userimg}) 
  } catch (error) {
     res.status(500).send('server error') 
  }
}
//-----------UPDATE Image-----------------//

exports.updatecoverImage=async(req,res)=>{
 
  try {
  const  usercover = await user.findByIdAndUpdate(
    req.params.id ,
    {$set:{...req.body,coverImage:req.file.filename}}
    )
     res.status(200).send({msg:"image added",usercover}) 
  } catch (error) {
     res.status(500).send('server error') 
  }
}
