const express = require('express');
const router = express.Router();
const userSchema=require("./userSchema")
const movieSchema=require("./moviesSchema")
const encription =require('./passwordHashing').encryption
const decription =require('./passwordHashing').decryption
const { jwtToken } = require('./jwtAuth');

router.get('/userSigining',async(req,res)=>{
    if(req.body.password && req.body.name && req.body.email)
    {
      let data;
      try{
        data=await userSchema.find({name:req.body.name});
    }
    catch(error){ 
      res.redirect('/')
    }
      app.use((req,res,next)=>
      {req.hashvalue=data.password;
         next()
      })
       app.use(decription)
    }
    res.redirect('/')
  })

  module.exports=router
  