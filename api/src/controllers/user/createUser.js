const { User } = require('../../db');

module.exports = async (req,res,next) => {
    let user = req.body;
    console.log(user);

    try{       

        const createdUser = await User.create({
            ...user,           
            password: user.password,
            email: user.email.toLowerCase()
        })

        return res.json(createdUser)
        
    }catch (error) {
        next(error)
        return res.send(error.message).status(409)
    }

}