const express = require("express");
const AdminsRouter = express.Router();
const authordata = require("../model/authordata");
const multer = require('multer')
const upload = multer({ dest: './public/images/' })



function router(nav) {
    AdminsRouter.get("/", function (req, res) {
        res.render("addauthors", {
            nav, title: "Library",
        })
    })
    AdminsRouter.post('/add', upload.single('image'), function (req, res) {
        var filenames = req.file.path;  //multer gives the full path to the file
        filenames = filenames.substring(14,);  //removes the first part /public/images ,and shows from 14 onwards

        // res.send("added")

        var item =
        {
            title: req.body.title,
            genre: req.body.genre,
            image: filenames
        }
        var author = authordata(item);
        author.save();
        res.redirect('/authoradmin');

    });
    return AdminsRouter
}
module.exports = router;



