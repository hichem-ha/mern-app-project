exports.admin = async (req,res,next) => {
    if(!req.user.isAdmin) {
        return res.status(400).send('you are not admin user');
    }
  next();
}