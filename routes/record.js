const express = require('express');
const mongoose =require('mongoose')
// route is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const route = express.Router();
const userSchema = mongoose.Schema({
  key:String,
  last_modified:  Date,
  wallet:Object,
  walletAddres:String,
  userInfo:Object,
  data:Array
})
const User = mongoose.model('User',userSchema);
// This will help us connect to the database
route.get("/hello",(req,res)=>{
  res.send("hello karan");
});

route.post('/user',(req,res)=>{
  console.log(req.body);
  const user = new User(req.body);
      user.save().then((result) => {
          res.send(result)  
      }, (error) => {
          res.status(400).send(error) // 400 for bad request
      })
});

route.post('/BLEdata',(req,res)=>{
  const { bleData } = req.body;
  const filter = {walletAddres:req.body.walletAddres}
  User.findOneAndUpdate(filter,{$push:{data:bleData}}, function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log(success);
        res.send("data has been send");
    }});
})


module.exports = route;
