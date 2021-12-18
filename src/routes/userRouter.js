const express=require("express");
const req = require("express/lib/request");
const userRouter=express.Router();
function router(nav){
    userRouter.get('/',function(req,res){
        res.render("register",{ nav,
            title:'Library'

        })
    })
    userRouter.post('/sign',function(req,res){
        res.send("Please log in to the Library App")
    })
return userRouter
}
module.exports=router;