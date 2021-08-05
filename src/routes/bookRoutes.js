const express = require('express');
const booksRouter = express.Router();
function router(nav){
  var books =[
    {
     title:'THE FREEDOM FROM UNKNOWN' ,
     author: 'JIDDU KRISHNAMURTHI' ,
     genre: 'FICTION',
     img:"jkrishnan"
    },
    {
        title:'SHIVA TRILOGY AMISH' ,
        author: 'AMISH TRIPATHI' ,
        genre: 'FICTIONy',
        img: 'amish'
       },
       {
        title:'DARWIN , HIS DAUGHTER AND HUMAN EVOLUTION' ,
        author: 'RANDAL KEYNES' ,
        genre: 'SCIENCE FICTION',
        img:'darwin'
       },
       {
        title:'The god of small things' ,
        author: 'Arunthathi roy' ,
        genre: 'Fiction',
        img:'darwin'
       }
]
booksRouter.get('/',function(req,res){
    res.render("books",
    {
      nav, 
      title:'library',
      books
    });
});
booksRouter.get('/:id', function(req,res){
const id = req.params.id
res.render('book',{
nav,
title:'library',
      book:books[id]
      


});
});
 return booksRouter;
}

module.exports = router;

