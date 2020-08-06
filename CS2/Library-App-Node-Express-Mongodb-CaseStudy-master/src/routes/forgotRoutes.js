const express = require("express");

const forgotRouter = express.Router();

function router(nav){
    
    
    forgotRouter.get('/',function(req,res){
        res.render("forgot",
        { 
           nav,
        
    
        });
    });
    
    
    
    return forgotRouter;
}



module.exports = router;