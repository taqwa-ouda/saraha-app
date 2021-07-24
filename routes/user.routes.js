const app =require ("express").Router();

const messageModel =require('../model/message.model')
const userModel =require('../model/user.model')

let userId
app.get('/user/:id',async(req,res)=>
{
   userId=req.params.id;
   let user =await userModel.findOne({_Id:userId})
    res.render('user.ejs',{isLoggidIn:false})
})
app.post('/handelUser',async(req,res)=>
{
    console.log(req.body);
    const {message}=req.body
    await messageModel.insertMany({message,userId})
    res.redirect('/user/'+userId)
})

module.exports=app