const express = require('express')
const router = express.Router()
const User = require('../models/User')
const {body, validationResult} = require('express-validator')

const jwt  = require('jsonwebtoken');
const brcypt = require('bcryptjs');
const jwtSecret = "abcdefghijklmnopqrstuvwxyzabcdef"


router.post("/createuser",[
body('email').isEmail(),
body('name').isLength({min : 5}),
body('password').isLength({min: 5})]
,async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const salt = await brcypt.genSalt(10);
    let secPassword = await brcypt.hash(req.body.password,salt);
    try{
       await User.create({
            name:req.body.name,
            password:secPassword,
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

router.post("/loginuser",[
    body('email').isEmail(),
    body('password').isLength({min: 5})]
    ,async(req,res)=>{
        const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    let email = req.body.email;
        try{
           let  userData = await User.findOne({email});
           if(!userData){
            return res.status(400).json({errors:"there is no account with this email address"})
           }
           const pswdCompare = await brcypt.compare(req.body.password,userData.password);
           if(!pswdCompare){
            return res.status(400).json({errors:"Wrong password"})
           }
           const data ={
                user:{
                    id:userData.id
                }
           }
           const authToken = jwt.sign(data, jwtSecret);
           return res.json({success:true, authToken:authToken});
        }catch(err){
            console.log(err);
            res.json({success:false})
        }
    })

module.exports =  router;