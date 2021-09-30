const User = require('../models/Users');

class UserController {
    async insert(req, res) {
        let user = await User.findOne({
            where: {
                email: req.body.email
            }
        })

        if (user) {
            return res.status(400).json({
                message: 'Já exise um usário com esse email'
            })
        }
        user = await User.create(req.body)

        return res.status(200).json(user);
    }
}

module.exports = new UserController();