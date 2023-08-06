const express = require('express');
const router = express.Router();
const { jwtToken } = require('./jwtAuth');
const encription =require('./passwordHashing').encryption
const cookieParser = require('cookie-parser');

router.post('/',async(req,res)=>{
    if(req.body.password && req.body.name && req.body.email)
    {
      app.use(encription)
    }
    let data={
        name : req.body.name,
        email :req.body.email,
        password : req.body.password
    }
    try{
      await userSchema.insertMany([data]);
  }
  catch(error){ console.log(error)
  }
  app.use(jwtToken)
  res.cookie("access_token", token).render('home',{name : data.name});
  })

  module.exports=router