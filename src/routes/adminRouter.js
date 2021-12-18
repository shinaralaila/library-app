const express=require("express");
const Bookdata=require("../model/Bookdata");

const adminRouter=express.Router();
function router(nav){
    adminRouter.get('/',function(req,res){
        res.render("addbooks",{ nav,
            title:'Library'

        })
    })
    adminRouter.post('/add',function(req,res){
        var item=
        {title:req.body.title,
            author:req.body.author,
            genre:req.body.genre,
            image:req.body.image,
        }
        var book=Bookdata(item);
        book.save();
        res.redirect('/books');
            
    });
    return adminRouter
}
module.exports=router;
