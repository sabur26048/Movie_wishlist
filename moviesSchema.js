const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/.env` });
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL_MOVIES,{
    useNewUrlParser : true,
   // useUnifiedTopology :true

}).then(()=>{
    console.log("mongodb connected movies");
})
.catch(()=>{
    console.log("mongodb connection failed");
})
const schema=new mongoose.Schema({

    id: {
        type:Number,
        required:true
    },
  original_language:  {
    type:String,
    required:true
   },
  original_title:  {
    type:String,
    required:true
  },
  overview:  {
    type:String,
    required:false
  },
popularity:{
    type:Number,
    required:true
},
poster_path: {
    type:Number,
    required:false
},
release_date:{
    type:Number,
    required:true
}})
const collection=new mongoose.model("movies",schema)
module.exports={collection,schema}