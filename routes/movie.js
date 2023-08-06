var express = require('express');
var router = express.Router();
const axios=require('axios')
router.get('/',async(req,res)=>{
    axios.get(process.env.MOVIES_LIST_URL
       +
      req.body.search
    )
    .then(response => {
      res.render('movieList',{response: response}); })
      .catch (error=> {
        res.render('movieList',{error:error});
      })
  })
  module.exports=router