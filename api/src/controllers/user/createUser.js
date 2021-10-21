const { User, Payment } = require('../../db');
const bcrypt = require('bcrypt');

module.exports = async (req,res,next) => {
    let user = req.body;
    console.log(user);

    try {
        if(typeof(user.password) === 'undefined' || user.password.length < 8){
            throw new Error("Validation error: invalid password")}
        // const hashedPassword = await bcrypt.hash(user.password, 12);
        const createdUser = await User.create({
            ...user,
            password: user.password,
            email: user.email.toLowerCase()
        }).then( user => {
            Payment.create({
                status: "created",
                price: 0,
                quantity: 0,
                userId: user.dataValues.id    
            })
        })
        return res.json(createdUser);

    } catch (error) {
        next(error);
        // return res.send(error.message).status(409)
    }

}
