const express = require("express");

const adminRouter = express.Router();

const Bookdata = require('../model/Bookdata');
const Authordata = require("../model/Authordata");

function router(nav){
    
    
    adminRouter.get('/addbook',function(req,res){
        res.render("addBook",
        { 
           nav,
        title:'Library'
    
        });
    });

    adminRouter.get('/addauthor',function(req,res){
      res.render("addAuthor",
      { 
         nav,
      title:'Library'
  
      });
  });
    
    adminRouter.post('/addbook/addb',function(req,res){
      var item = {
     title:  req.body.title,
       author: req.body.author,
        genre: req.body.genre,
         image :req.body.image
      }  
     var book =  Bookdata(item);
     book.save();//saving to database
     res.redirect('/books');
   
    });
    adminRouter.post('/addauthor/adda',function(req,res){
      var item = {
     title:  req.body.title,
       author: req.body.author,
        genre: req.body.genre,
         image :req.body.image
      }  
     var author =  Authordata(item);
     author.save();//saving to database
     res.redirect('/authors');
   
    });
    return adminRouter;
}



module.exports = router;