const express=require("express");
const authoradminRouter=express.Router();
const authordata=require("../model/authordata");
const multer  = require('multer')
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
authoradminRouter.get('/',
function(req,res){
    authordata.find()
    .then(
     function(authors){
        res.render("authoredit",{nav,title:'Library',
        authors})
    })
});


// GET edit an existing author
authoradminRouter.get('/update/:i', (req, res) => {
    const i = req.params.i
    authordata.findOne({_id:i})
    .then(function(author){
        res.render('authorupdate',{nav,title:'Library',author})
    })
}); 


    
   
  // POST and update the document
  authoradminRouter.post('/updatesave/:i',upload.single('image'), (req, res) => {
    const i = req.params.i
    
    let updatedauthor = {
      _id: i,
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      image:req.body.image
    };
  
    authordata.updateOne({_id: i}, updatedauthor, (err) => {
      if(err) {
        console.log(err);
        res.end(err);
      } else {
        // refresh
        res.redirect('/authoradmin');
      }
    });
  }); 

  //delete the existing author
  authoradminRouter.get('/delete/:i', (req, res, ) => {
    let i = req.params.i;
  
    authordata.remove({_id: i}, (err) => {
      if(err) {
        console.log(err);
        res.end(err);
      } else {
        // refresh
        res.redirect('/authoradmin');
      }
    });
  });


return authoradminRouter
}
module.exports=router;
