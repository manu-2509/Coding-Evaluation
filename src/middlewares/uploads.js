const express = require('express');
const multer = require('multer')
const path = require('path')
const req = require('express/lib/request')


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,"my-uploads"))
    },
    filename: function (req, file, cb) {
      const prefixSuffix = Date.now() 
      cb(null, uniqueSuffix+ '-' + file.originalname)
    }
  })

  function fileFilter (req, file, cb) {
if(file.mimeType=="image.jpeg"||file.mimeType=="image/jpg"){
     
    cb(null, true)
}else{
    cb(null, false)
}

}

  const options= {
      storage,
      fileFilter,
      limits:{
          fileSize:1024*1024*5
      }

  }

  uploads = multer(options)

  module.exports = uploads