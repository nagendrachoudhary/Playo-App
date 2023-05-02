const express = require("express");
const  mongoose  = require("mongoose");
const user = require("../models/user.models");
const bcrypt = require("bcryptjs");
const { signup, login } = require("../controllers/user.controllers");
const userRouter = express.Router();
userRouter.post('/signup',async(req,res)=>{
    let user =req.body
    try{
         await signup({...user})
        res.send("create account")
         }
    catch(err){
        res.status(404).send(err.message)
    }
})
userRouter.post('/login',async(req,res)=>{
    let user =req.body
    try{
         let data=await login({...user})
          res.send({token:data})
         }
    catch(err){
        res.status(404).send(err.message)
    }
})
module.exports=userRouter