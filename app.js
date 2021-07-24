const express =require('express');
const app = express();
const path =require('path');
const mongoose =require('mongoose');

var session = require('express-session');
app.use(session({
     secret: 'keyboard cat',
     resave: false,
     saveUninitialized: false,
     store
   }));
var MongoDBStore = require('connect-mongodb-session')(session);
var store = new MongoDBStore({
     uri: 'mongodb://localhost/saraha-app',
     collection: 'mySessions'
   });

app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"puplic")));


app.use(require('./routes/login.routes'));
app.use(require('./routes/message.routes'));
app.use(require('./routes/register.routes'));
app.use(require('./routes/user.routes'));
app.use(require('./routes/index.routes'));



app.get('/logOut',(req,res)=>
{
     req.session.destroy(()=>
     {
res.redirect('/')
     })
     
})
mongoose.connect("mongodb://localhost/saraha-app",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
     console.log("conected");
})
const port =3000;
app.listen(port , (req,res)=>
{
     console.log ("done")
})


