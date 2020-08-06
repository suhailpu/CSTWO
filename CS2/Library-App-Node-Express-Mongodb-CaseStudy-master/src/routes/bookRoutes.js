const express = require("express");

const booksRouter = express.Router();

const Bookdata = require('../model/Bookdata');

function router(nav){
    // var books = [
    //     {
    //         title : 'The Alchemist',
    //         author : 'Paulo Coelho',
    //         genre : 'Quest',
    //         img : "tom.jpg",
    //         para:"The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he asks a Gypsy fortune teller in the nearby town about its meaning. The woman interprets the dream as a prophecy telling the boy that he will discover a treasure at the Egyptian pyramids."
    //     },
    //     {
    //         title : 'Harry Potter',
    //         author : 'J.K Rowling',
    //         genre : 'Fantasy',
    //         img : "harry.jpg",
    //         para:"Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry."
    //     },
    //     {
    //         title : 'Pathummede Aadu',
    //         author : 'Basheer',
    //         genre : 'Drama',
    //         img : "basheer.jpg",
    //         para:"Pathummayude Aadu is one of the most popular works by Vaikom Muhammad Basheer. It has a long foreword by the novelist himself and a longer afterword by P K Balakrishnan. This special edition also has illustrations by Sherif and photographs of the real characters including Pathumma and goats."
    //     }   
    // ]
    
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",
            { 
               nav,
            title:'Library',
            books
            });
        })
       
    });
    
    booksRouter.get('/:id',function(req,res){
       const id = req.params.id;
       Bookdata.findOne({_id:id})
       .then(function(book){
        res.render('book',{
            nav,
            title:'Library',
            book 
        });
       })
        
    });
    booksRouter.get('/delete/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOneAndDelete({_id:id})
            .then(function(books){
                res.redirect('/books');
            });
});

booksRouter.get('/edit/:id',function(req,res){
    const id = req.params.id;
    Bookdata.findOne({_id:id})
    .then(function(book){
        res.render('editBook',{
            nav,
            title:'Library',
            book 
        });
       })
        
    });

    booksRouter.post('/edit/:id',function(req,res){
        const id = req.params.id;
       Bookdata.findOne({_id:id})
            .then(function(book){
                    if (!book){
                        return next(new Error('cant load'));
                    }
                    else {
                        var itemedit = {
                            title: req.body.title,
                            author: req.body.author,
                            genre:  req.body.genre,
                            image:  req.body.image
                        }
                        // var authoredit = Authordata(itemedit);
                        // authoredit.save();
                        Bookdata.findByIdAndUpdate(id,itemedit,(er,book1) => {
                            res.redirect('/books/'+book1._id);
                        });
                    }
            });
    });

    return booksRouter;
}



module.exports = router;