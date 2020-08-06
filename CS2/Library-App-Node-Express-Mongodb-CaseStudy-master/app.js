const express = require("express");

const app= express();

const nav = [
    {
        link:'/main',name:'HOME'
    },
    
    {
        link:'/books',name:'Books'
    },
{
    link:'/authors',name:'Authors'
} ,
{
    link:'/login',name:'Login'
} ,
{
    link:'/signup',name:'Signup'
} ,
{
    link:'/',name:'Signout'
},
{
    link:'/forgot',name:'Forgot'
},
{
    link:'/admin/addbook',name:'Add Book'
},
{
    link:'/admin/addauthor',name:'Add Author'
}
];   

const booksRouter = require('./src/routes/bookRoutes')(nav);    

const authorsRouter = require('./src/routes/authorRoutes')(nav);   

const loginRouter = require('./src/routes/loginRoutes')(nav);   

const signupRouter = require('./src/routes/signupRoutes')(nav); 

const forgotRouter = require('./src/routes/forgotRoutes')(nav); 

const adminRouter = require('./src/routes/adminRoutes')(nav); 


app.use(express.urlencoded({extended:true}));

app.use(express.static('./public'));

app.set('view engine','ejs');

app.set('views','./src/views');

app.use('/books',booksRouter);

app.use('/authors', authorsRouter);

app.use('/login', loginRouter);

app.use('/signup',signupRouter);

app.use('/forgot',forgotRouter);

app.use('/admin',adminRouter);



app.get('/',function(req,res){
    res.render("index",
    {
        nav,
    title:'Library'
    });
});

app.get('/main',function(req,res){
    res.render("indexsign",
    {
        nav,
    title:'Library'
    });
});



app.listen(5000);

 