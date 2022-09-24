const community = require('../models/community');

//---------------ADD NEW COMMUNITY---------------//
exports.Addcommunity = async (req, res) => {
    try {
      const newcommunity = new community(req.body).populate({
        path:'createdBy',
        select:'firstname lastname'
      });
      await newcommunity.save();
      res.status(200).send({ msg: "community added", newcommunity });
    } catch (error) {
      res.status(500).send("couldn't add community")
    };
    
  };
//---------------GET ALL COMMUNITIES--------------//
exports.Getcommunities = async (req, res) => {
    try {
      const getcommunities = await community.find();
      res.status(200).send({ msg: "all communities", getcommunities });
    } catch (error) {
      res.status(500).send("couldn't get communities ");
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