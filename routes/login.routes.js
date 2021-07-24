const app =require ("express").Router();

const userModel =require('../model/user.model')

app.get('/',(req,res)=>
{
    res.render('login.ejs',{isLoggidIn:false})
})
app.post("/handleLogin",async(req,res)=>
{
    const{email,password}=req.body;
    let user = await userModel.findOne({email})
    if(user)
    {
        if(password==user.password)
        {
            req.session.userId=user._id;
            req.session.name=user.name;
            req.session.isLoggidIn=true;

            res.redirect('/message')
        }
        else{
            res.redirect('/')

        }
    }
    console.log(req.body);
    res.redirect('/')
})
module.exports=app