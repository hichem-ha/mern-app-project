const community = require('../models/community');
const user = require('../models/user');



//---------------ADD NEW COMMUNITY---------------//
exports.Addcommunity = async (req, res) => {
  
    try {
      const newcommunity = new community(req.body)
      const owner = await user.findById(req.params.id)
     if (!owner)
     {
      res.status(400).send({ msg: "no community added"});
     }
     newcommunity.ownerId= req.params.id
      await newcommunity.save();
      res.status(200).send({ msg: "community added", newcommunity });
    } catch (error) {
      res.status(500).send("couldn't add community")
    };
    
  };
//---------------GET ALL COMMUNITIES--------------//
exports.Getcommunities = async (req, res) => {
    try {
      const getcommunities = await community.find().populate('posts');
      res.status(200).send({ msg: "all communities", getcommunities });
    } catch (error) {
      res.status(500).send("couldn't get communities ");
    }
  };
  //-----------GET ONE COMMUNITY-----------//
  exports.GetOnecommunity = async (req, res) => {
    try {
      const getcommunity = await community.findById(req.params.id).populate('posts').populate('createdIn').populate('creatorId');
      res.status(200).send({ msg: "one community", getcommunity });
    } catch (error) {
      res.status(500).send("couldn't get community ");
    }
  };
  //------------DELETE COMMUNITY-------------//
  exports.Deletecommunity = async (req, res) => {
    try {
      
        const delecommunity = await community.findByIdAndDelete(req.params.id);
        res.status(200).send({ msg: "community deleted", delecommunity });
    
    } catch (error) {
      res.status(500).send("could not delete community");
    }
  };
  //-----------UPDATE COMMUNITY-----------------//
  exports.Updatecommunity = async (req, res) => {
    try {
     
        const editcommunity = await community.findByIdAndUpdate(
          req.params.id,
          {
            $set: { ...req.body },
          },
          { new: true }
        );
        res.status(200).send({ msg: "community updated", editcommunity });
      
     
    } catch (error) {
      res.status(500).send("couldn't update community");
    }
  };
    //-----------UPDATE Image-----------------//

    exports.updateComProfileImage=async(req,res)=>{
 
      try {
      const  comimg = await community.findByIdAndUpdate(
        req.params.id ,
        {$set:{...req.body,profileImage:req.file.filename}}
     
        )
         res.status(200).send({msg:"image added",comimg}) 
      } catch (error) {
         res.status(500).send('server error') 
      }
    }
    //-----------UPDATE Image-----------------//
    
    exports.updateComcoverImage=async(req,res)=>{
     
      try {
      const  usercover = await community.findByIdAndUpdate(
        req.params.id ,
        {$set:{...req.body,coverImage:req.file.filename}}
        )
         res.status(200).send({msg:"image added",usercover}) 
      } catch (error) {
         res.status(500).send('server error') 
      }
    }