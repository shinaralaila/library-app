const express = require("express");
const AdminsRouter=express.Router();
const authordata=require("../model/authordata")
function router(nav){
    AdminsRouter.get("/",function(req,res){
            res.render("addauthors",{nav,title:"Library",
            })
        })
        AdminsRouter.post('/add',function(req,res){
           // res.send("added")
            
             var item=
            {title:req.body.title,
                genre:req.body.genre,
                image:req.body.image,
            }
            var author=authordata(item);
            author.save();
            res.redirect('/authors');  
                
        });
       return AdminsRouter
   }
    module.exports=router;
    
    

