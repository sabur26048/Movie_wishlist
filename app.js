const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const movie=require('./routes/movie')
const usersRouter = require('./routes/users');
const userRegister=require('./routes/userRegister')
const userSigning=require('./routes/userSigning')
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//home page 
app.get('/',(req,res)=>{
  res.render('home');
})
app.get('/home',(req,res)=>{
  res.render('home');
})

//movie route
app.use('/movieList',movie)


//user register route
app.use('/userRegister',userRegister)

//signin
app.get('/signin',(req,res)=>{
  res.render('signin');
})

//usersigining
app.use('/userRegister',userSigning)

//sign up
app.get('/signup',(req,res)=>{
  res.render('signup');
})


//protectes user route
app.use('/user', usersRouter);




app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
