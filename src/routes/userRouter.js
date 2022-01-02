const express = require("express");
const userRouter = express.Router();
const userdata = require("../model/userdata");
const bcrypt = require('bcrypt');

function router(nav) {
    userRouter.get('/', function (req, res) {
        res.render("register", {
            nav,
            title: 'Sign Up'

        })
    })
    userRouter.post('/sign', async function (req, res) {
        // Check if this user already exisits
    let user = await userdata.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send('That email already exists!');
    } else {
        // Insert the new user if they do not exist yet
        var item =
        {
            name: req.body.name,
            email: req.body.email,
            pwd: req.body.pwd,
            role:""

        }
        const salt = await bcrypt.genSalt(10);   // create crptogrphic code
        item.pwd = await bcrypt.hash(item.pwd, salt);// changed pw with bcrypt -salt
        
        var usr = userdata(item);
        await usr.save();
        res.redirect('/login')
    }
    });
    return userRouter
}
module.exports = router;