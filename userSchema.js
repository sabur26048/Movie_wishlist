const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/.env` });
const mongoose = require('mongoose');
const movieObj=require("./moviesSchema").schema
mongoose.connect(process.env.DATABASE_URL_USERS,{
    useNewUrlParser : true,
   // useUnifiedTopology :true

}).then(()=>{
    console.log("mongodb connected users");
})
.catch(()=>{
    console.log("mongodb connection failed");
})
/*
const movieObj = new mongoose.Schema({
    movie: {
      type: String,
      required: true,
    } 
  });*/
const schema=new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    movieList: [movieObj]
})
    const collection=new mongoose.model("users",schema)
    module.exports=collection