const express = require("express");

const loginRouter = express.Router();

const Signupdata = require('../model/Signupdata');

function router(nav){
    
    
    loginRouter.get('/',function(req,res){
        res.render("login",
        { 
           nav,
        title:'Library',
        loginError : ""
        });
    });
    
    loginRouter.post("/", (req, res) => {
        let uname1 = req.body.uname;
        let pass1 = req.body.pass;
       Signupdata.findOne({username:uname1,password:pass1})
      .then((signup)=>
              {
               if(signup==null){
               res.render("login",
               { 
                  nav,
               title:'Library',
               loginError : "Invalid Username or Password"
               });
              
              
                res.redirect('/login');
                
              }
              else
              {
               
               
             
                res.redirect('/main');
                
              }
              })
    });
    
    return loginRouter;
}

module.exports = router;