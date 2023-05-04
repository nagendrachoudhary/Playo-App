const express = require("express");
const  mongoose  = require("mongoose");
const user = require("../models/user.models");
const bcrypt = require("bcryptjs");
const faker =require('@faker-js/faker')
const { signup, login } = require("../controllers/user.controllers");
const auth = require("../middleware/Auth");
const sports = require("../models/sports.models");
const { createtable, updatetable } = require("../controllers/sport.controllers");
const sportsRouter = express.Router();
// for fake data 

async function run(){
    const games = [];
    const city =['jaipur','pune','Mumbai','Delhi']
    const allgame =['Basketball', 'Football', 'Tennis', 'Volleyball']
    const id=['645179c3a3f133ee6cde84a9','64517a80a3f133ee6cde84ab','64517bf3a758e659ceb2f161','64518171f2641ec11590af23']
    for (let i = 0; i < 100; i++) {
        const game = {
   description: faker.faker.lorem.sentence(),
   time: faker.faker.date.soon(10, Date.now()),
   maxplayers: faker.faker.random.numeric([10,20,30,40,50,5,2,4]),
    city: city[(faker.faker.random.numeric()%4)],
    img: faker.faker.image.sports(),
    sports:allgame[(faker.faker.random.numeric()%4)],
   owner: {
       username: faker.faker.internet.userName(),
        id: id[(faker.faker.random.numeric()%4)]
    }
};
games.push(game);
}
await sports.insertMany(games)
}

sportsRouter.get('/sports',async(req,res)=>{
    try{ 
        let query=req.query
        let alltables = await sports
        .find({
          ...(query.city !== "All" && { city:{ $regex: new RegExp(query.city, "i") } }),
          ...(query.game !== "All" && { sports: { $regex: new RegExp(query.game, "i") } }),
          ...(query.active !== "All" && { active: query.active })
        }).sort({...(query.rating == "Random"?{time:1}:{ rating: query.rating })})
        .limit(100);
           res.send(alltables)
         }
    catch(err){
        res.status(404).send(err.message)
    }
})
sportsRouter.post('/sports/join/:id',auth,async(req,res)=>{
    try{
        let pushed = {id:req.user._id,username:req.user.username}
        let {id}=req.params
        let data=await sports.findById(id)
        let curuser= await user.findById(req.user._id)
        curuser.requestedtables.push(data);
        await user.findByIdAndUpdate(req.user._id,{...curuser})
        data.requests.push(pushed)
        await sports.findByIdAndUpdate({_id:id},{...data})
        res.send("done")
    }catch(err){
        res.status(404).send(err.message)
    }
})
sportsRouter.post('/sports/create',auth,async(req,res)=>{
    try{
        let table=req.body;
        let owner=req.user;
        table={...table,owner:{...owner}}
        await createtable(table)
        res.send("done")
    }catch(err){
        res.status(404).send(err.message)
    }
})
sportsRouter.get('/sports/allreqests',auth,async(req,res)=>{
    try{
        let owner=req.user;
        let reqs = await sports.find({ owner: { username: owner.username } });
        let allrequests=[];
        for(var i=0;i<reqs.length;i++){
            var req=reqs[i].requests;
            for(var j=0;j<req.length;j++){
                let data = req[j]
                data.tableid=reqs[i]._id
                data.date=reqs[i].time
                data.city=reqs[i].city
                data.sports=reqs[i].sports                
                allrequests.push(data)
            }
        }
        res.send(allrequests)
    }catch(err){
        res.status(404).send(err.message)
    }
})
sportsRouter.post('/sports/responserequest',auth,async(req,res)=>{
    try{
        let body = req.body
       let data=await updatetable(body)
        res.send("data")
    }catch(err){
        res.status(404).send(err.message)
    }
})
module.exports=sportsRouter