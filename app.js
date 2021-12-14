const express=require("express");

const nav=[
    {
        link:"/books",

        name:"books"
    },
    {
        link:"/authors",
        
        name: "authors"
    },
    {
        link:"/admin",

        name:"Add Book"
    }
];
const booksRouter=require("./src/routes/booksRouter")(nav);
const authorRouter=require("./src/routes/authorRouter")(nav);
const adminRouter=require("./src/routes/adminRouter")(nav);
const app = new express();
app.use(express.static('./public'));
//app.use(express.static('./src/views'));
const path = require('path');
//app.set('views',path.join(__dirname,'views'));
app.set("view engine","ejs");

app.set("views",__dirname+"/src/views");
//app.set('views', path.join(__dirname, 'views'));

//app.set('views', __dirname+ '/views');
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/admin',adminRouter);
    app.get('/', function(req,res){
        res.render( "index",
        { nav,
    title:"library"});
    });
    

    app.listen(5000);