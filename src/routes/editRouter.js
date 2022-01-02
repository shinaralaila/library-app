const express=require("express");
const editRouter=express.Router();
const Bookdata=require("../model/Bookdata");
const multer  = require('multer');
const { path } = require("express/lib/application");

const upload = multer({ dest: './public/images/' })



function router(nav){



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
editRouter.get('/',function(req,res){
    Bookdata.find()
    .then(
     function(books){
        res.render("edit",{nav,title:'Library',
        books})
    })
});

 


// GET edit an existing Book
editRouter.get('/update/:i', (req, res) => {
    const i = req.params.i
    Bookdata.findOne({_id:i})
    .then(function(book){
        res.render('update',{nav,title:'Library',book})
    })
}); 


    
   
  // POST and update the document
  editRouter.post('/updatesave/:i',upload.single('image'), (req, res) => {
    const i = req.params.i
    
    let updatedBook = {
      _id: i,
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      image:req.body.image
    };
  
    Bookdata.updateOne({_id: i}, updatedBook, (err) => {
      if(err) {
        console.log(err);
        res.end(err);
      } else {
        // refresh
        res.redirect('/booksadmin');
      }
    });
  }); 

  
  editRouter.get('/delete/:i', (req, res, ) => {
    let i = req.params.i;
  
    Bookdata.remove({_id: i}, (err) => {
      if(err) {
        console.log(err);
        res.end(err);
      } else {
        // refresh
        res.redirect('/booksadmin');
      }
    });
  });


return editRouter
}
module.exports=router;
