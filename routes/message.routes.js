const app =require ("express").Router();
const messageModel =require('../model/message.model')

app.get('/message',async(req,res)=>
{
    let messages =await messageModel.find({userId: req.session.userId})
    console.log(messages);
    let fullPath =req.protocol+"://"+req.headers.host+"/user/"+req.session.userId;
    if( req.session.isLoggidIn==true)
    {
        res.render('message.ejs',{name:req.session.name ,fullPath,messages ,isLoggidIn:req.session.isLoggidIn})
    }else{
        res.redirect('/')
    }
})

module.exports=app