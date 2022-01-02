const express = require("express");
const multer = require('multer');
//const upload = multer({ dest: './public/uploads/' });
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
//const expressLayouts=require('express-ejs-layouts');
const app = new express();
const appRouter = express.Router();







const nav = [
    {
        link: "/booksadmin",
        name: "Books"
    },
    {
        link: "/authoradmin",
        name: "Authors"
    },
    {
        link: "/admin",
        name: "Add Book"
    },
    {
        link: "/Admins",
        name: "Add Author"
    }
];
const navuser = [
    {
        link: "/books",
        name: "books"
    },
    {
        link: "/authors",
        name: "authors"
    }
];
const navhome = [
    {
        link: "/login",
        name: "Login"
    },
    {
        link: "/register",
        name: "Sign Up"
    },
    {
        link: "/logout",
        name: "Log Out"
    }
]

const booksRouter = require("./src/routes/booksRouter")(navuser);
const authorRouter = require("./src/routes/authorRouter")(navuser);
const adminRouter = require("./src/routes/adminRouter")(nav);
const AdminsRouter = require("./src/routes/AdminsRouter")(nav);
const editRouter = require("./src/routes/editRouter")(nav);
const authoradminRouter = require("./src/routes/authoradminRouter")(nav);
const loginRouter = require("./src/routes/loginRouter")(navhome);
const userRouter = require("./src/routes/userRouter")(navhome);



app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

//app.use(express.static('./src/views'));
const path = require('path');

//app.set('views',path.join(__dirname,'views'));
app.set("view engine", "ejs");

app.set("views", __dirname + "/src/views");
//app.set('views', path.join(__dirname, 'views'));

//app.set('views', __dirname+ '/views');


  

app.use('/books',booksRouter);
app.use('/authors', authorRouter);
app.use('/admin', adminRouter);
app.use('/register', userRouter);
app.use("/Admins", AdminsRouter);
app.use("/login", loginRouter);
app.use("/booksadmin", editRouter);
app.use("/authoradmin",authoradminRouter)
app.get('/', function (req, res) {
    res.render("index",
        {
            navhome,
            title: "Library"
        });
});
app.get("/logout",(req,res)=>{
    
    res.send('logged out')
})
// app.listen(5001);
app.listen(process.env.PORT || 5000);
