const {User} = require('../../db')

module.exports = async(req,res,next) =>{
    const {id} = req.params;
    try {
        const user = await User.findOne({
            where:{id}
        });
        return res.json(user)
    } catch (error) {
        next(error)
        // return res.json(error.message)
    }
}