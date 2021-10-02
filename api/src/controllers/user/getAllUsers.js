const {User} = require('../../db')

module.exports = async(req,res,next) =>{
    try {
        const users = await User.findAll();
        console.log(users)
        return res.json(users)
    } catch (error) {
        next(error);
        return res.json(error)
    }
}