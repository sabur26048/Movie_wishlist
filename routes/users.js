const express = require('express');
const router = express.Router();
const userSchema=require("../userSchema")
const { verifyToken } = require('./jwtAuth');
/* GET home page. */
router.get('/',verifyToken, function(req, res) {
  res.render('userprofile');
});
router.patch('/',verifyToken, async function(req, res) {
  const data=req.body.data;
  try{
    await userSchema.updateOne({name : req.body.name},{$push:{data:data}});}
    catch(error){res.status(500).send(error)}
    res.render("/"); 
});

router.delete('/',verifyToken, async function(req, res) {
  const data=await userSchema.deleteOne({name :req.body.name},{$pop :{original_title : req.body.movie}})
  res.render('userWishList',{response :data});
});
router.post('/userWishList',verifyToken, async function(req, res) {
  const data=await userSchema.find({name :req.body.name})
  res.render('userWishList',{response :data});
});
module.exports = router;
