const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post("/createuser",async(req,res)=>{
    try{
       await User.create({
            name:req.body.name,
            password:req.body.password,
            confirmPassword:req.body.confirmPassword,
            email:req.body.email,
            number:req.body.number,
        })

        res.json({success:true});
    }catch(err){
        console.log(err);
        res.json({success:false})
    }
})

module.exports =  router;