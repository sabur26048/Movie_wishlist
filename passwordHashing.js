const bcrypt=require('bcrypt');
const { jwtToken } = require('./jwtAuth');
const cookieParser = require('cookie-parser');
const saltRounds=4;
const encryption=(req,res,next)=>{
bcrypt.hash(password,saltRounds)
  .then(hash => {
    req.body.password=hash;
    next()
  })
  .catch(err => console.error(err))
}

const decryption=(req,res,next)=>{
  bcrypt
  .compare(req.body.password, req.body.hashvalue)
  .then(res => {
    if(res){
      app.use(jwtToken)
      res.cookie("access_token", token).render('home',{name : req.body.name});
    }
    else{
    res.redirect('/signin')}
  })
  .catch(err => res.redirect('/signin'))  
}



module.exports={encryption,decryption}