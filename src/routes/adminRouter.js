const express=require("express");

const adminRouter=express.Router();
function router(nav){
    adminRouter.get('/',function(req,res){
        res.render("addbooks",{ nav,
            title:'Library'

        })
    })
    adminRouter.get('/add',function(req,res){
        res.send("Book is added")
    })
    return adminRouter
}
module.exports=router;
