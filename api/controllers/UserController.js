/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    register : (req, res) => {
        let data = {
            name: req.param('name'),
            username: req.param('username'),
            password: req.param('password'),
            phone: req.param('phone'),
            city: req.param('city')
        }
        User.create(data).exec((err, user) => {
            if (err) return res.badRequest({ err });
            return res.json(user);
        })
    },
    login : (req, res) => {
        let username = req.param('username')
        let password = req.param('password')
        User.findOne({ username, password }).exec((err, user) => {
            if (err) res.badRequest({ err })
            if (!user) return res.notFound();
            return res.json(user);
        })
    }
};

