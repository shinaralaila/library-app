const express=require("express");
const Bookdata=require("../model/Bookdata");
const multer  = require('multer')
const upload = multer({ dest: './public/images/' })




const adminRouter=express.Router();
function router(nav){
    adminRouter.get('/',function(req,res){
        res.render("addbooks",{ nav,
            title:'Library'

        })
    })
    adminRouter.post('/add',upload.single('image'),function(req,res){
        var filenames=req.file.path;  //multer gives the full path to the file
        filenames=filenames.substring(14,);  //removes the first part /public/images ,and shows from 14 onwards
        var item=
        {title:req.body.title,
            author:req.body.author,
            genre:req.body.genre,
            image:filenames
        }
        var book=Bookdata(item);
        book.save();
        res.redirect('/books');
            
    });
    return adminRouter
}
module.exports=router;
