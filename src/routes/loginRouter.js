const express = require("express");
const loginRouter = express.Router();
const bcrypt = require('bcrypt');
const userdata = require("../model/userdata");


function router(navhome) {
    loginRouter.get("/", function (req, res) {
        res.render("login", { navhome, title: "Login" })
    })

    loginRouter.post('/new', async function (req, res) {
        //  Now find the user by their email address
        let user = await userdata.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).send('Incorrect email or password.');
        }

        // Then validate the Credentials in MongoDB match
        // those provided in the request
        const validPassword = await bcrypt.compare(req.body.pwd, user.pwd);
        if (!validPassword) {
            return res.status(400).send('Incorrect email or password.');
        }
        

        //res.send(true);
        // res.redirect("../");// goes back one level parent
        if (user.role === "A") {
            res.redirect("../booksadmin");
        } else {
            res.redirect("../books");
        }
     });

    
    return loginRouter;
}
module.exports = router