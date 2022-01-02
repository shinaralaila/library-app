const express = require("express");
const booksRouter = express.Router();
const Bookdata = require("../model/Bookdata");


function router(nav) {



    /* 
    var books =[
        {title:'Tom nd Jerry',
        author:'Joseph Barbara',
        genre:'Cartoon',
        img:'Tom.jpg'
    
    },
    {
        title:'Harry Porter',
        author:'J K Rowling',
        genre:'Fantasy',
        img:'harry.jpg'
    
    },
    {
        title:'Pathummadea Aadu',
        author:'Basheer',
        genre:'Drama',
        img:'basheer.jpg'
    
    },
    ] */
    booksRouter.get('/',function (req, res) {
        Bookdata.find()
            .then(function (books) {
                    res.render("books", {
                        nav, 
                        title: 'Library',
                        books
                    })
                }); 
    });

    /* booksRouter.get('/', function(req,res){ 
       
       res.render( "books", {nav,
   title:"library", 
   books })
   })  */
    booksRouter.get('/:i', function (req, res) {
        const i = req.params.i
        Bookdata.findOne({ _id: i })
            .then(function (book) {
                res.render('book', { nav, title: 'Library', book })
            })
    });



    return booksRouter
}
module.exports = router;
