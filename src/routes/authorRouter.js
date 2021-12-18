const express=require("express");
const authordata = require("../model/authordata");
const authorRouter=express.Router();

function router(nav){


/* 

var authors =[
    {
    author:'Joseph Barbara',
    title:'Tom nd Jerry',
    genre:'Cartoon',
    img:'barbara.jpg'

},
{   author:'J K Rowling',
    title:'Harry Porter',
    genre:'Fantasy',
    img:'rowling.jpg'

},
{
    
    author:'Basheer',
    title:'Pathummadea Aadu',
    genre:'Drama',
    img:'v m basheer.jpg'

},
] */

authorRouter.get('/', function(req,res){ 
    authordata.find()
    .then(function (authors){
    res.render( "authors", {nav,
title:"Library", 
authors })
});});
authorRouter.get('/:i', function(req,res){ 
    const i = req.params.i;
    authordata.findOne({_id:i})
    .then(function(author){
    
    res.render( "author", {nav,
title:"library",
author })
});});
return authorRouter
};

module.exports=router;
