const jwt = require ('jsonwebtoken');
const users = require ('../models/user')

exports.IsAuth = async (req,res,next) => {
    const token = req.header ('token');

    try {
        const decode = jwt.verify(token , process.env.secretkey)
        if(!decode) {
            return res.status(400).send('you are not authorized');
        }
        const user = await users.findById(decode.id);
        req.user = user ;
        next();
    } catch (error) {
        console.log(error);
    }
}