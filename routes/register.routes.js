const mongoose= require("mongoose");
const {validationResult}=require('express-validator')
const app =require ("express").Router();
const validation =require('../validation/validation');
const userModel =require('../model/user.model')

app.get('/register',(req,res)=>
{
    
    res.render('register.ejs',{isLoggidIn:false})
})
app.post('/handleRegister',async(req,res)=>
{
    const{name,email,password}=req.body;
  await  userModel.insertMany({
      name ,email,password
  })
    // const error =validationResult(req)
    // console.log(error.array())
    // console.log(error.isEmpty())
    console.log(req.body);
    res.redirect('/register')
})

module.exports=app