const {User} = require('../../db.js');
const bcrypt = require('bcrypt');

module.exports = async (req, res, next) => {
	let user = req.body;
	let {id} = req.params;
	try {
		if(user.email) { user.email = user.email.toLowerCase();}
		if(user.password) {	user.password = await bcrypt.hash(user.password, 12);}
		else{
			const old = await User.findOne({
				where: {id}
			});
			user.password = old.password;
		}
		await User.update({...user},
		{where: 
			{id}
		});
		return res.json({success: true}).status(200);
	} catch (err) {
        next(error);
		// return res.send(err.message).status(409);
	}
};