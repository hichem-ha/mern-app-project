const profile = require('../models/profile');
//---------------GET ALL USERS--------------//
exports.Getusers = async (req, res) => {
    try {
      const users = await profile.find();
      res.status(200).send({ msg: "all users", users });
    } catch (error) {
      res.status(500).send("couldn't get users");
    }
  };
  //------------DELETE USER-------------//
  exports.Deleteuser = async (req, res) => {
    try {
      const deleuser = await profile.findByIdAndDelete(req.params.id);
      res.status(200).send({ msg: "user deleted", deleuser });
    } catch (error) {
      res.status(500).send("could not delete user");
    }
  };
  //-----------UPDATE USER-----------------//
  exports.Updateuser = async (req, res) => {
    try {
      const edituser = await profile.findByIdAndUpdate(
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