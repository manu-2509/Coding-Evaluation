 const Book = require('../models/book.models')

 const upload = require('../middlewares/uploads')

const express = require('express')

const router = express.Router()

router.post("",uploads.single("coverImage"),async(req,res)=>{
 try {
     const book =await Book.create({
         likes:req.body.likes,
         coverImage:req.file.coverImage,
         content:req.body.content
     })
     return res.status(201).send(book);
 } catch (err) {
     return res.status(500).send(err)
 }

})

module.exports = router