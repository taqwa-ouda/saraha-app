const app=require('express').Router();
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
      user:'toqao937@gmail.com', // generated ethereal user
      pass:'123456789taqwa' , // generated ethereal password
    },
  });

  

app.get('/index',(req,res)=>
{
     res.render('index.ejs',{isLoggidIn:req.session.isLoggidIn})
})

app.post('/send',async(req,res)=>
{
    let options =
    {
        from: '"node.js Team" <toqao937@gmail.com>', // sender address
        to: req.body.email, // list of receivers
        subject: "Hello ✔", // Subject line
        html: 
        `
       <div style="background-color:teal;color:red;padding:140px">
       
      <h1>your email is: ${req.body.email}</h1>
       </div> 
        `
        , // html body
      };
     await transporter.sendMail(options,(err)=>
     {
         if(err){
             console.log('eroor');
         }
         else{
             console.log('email has been sent');
         }
     })

    console.log(req.body.email)
    res.redirect('/index')
})



module.exports=app