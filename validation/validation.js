const {check}=require('express-validator')

module.exports =
[check('name').matches(/^[A-Z][a-zA-Z]/),
check("email").isEmail(),
check('password').matches(/(?=.*[0-9])/),
check('PasswordConfirmation').custom((value,{req})=>{
    if(value!==req.body.password)
    {
        return false
    }else{
        return true
    }
})
]