const express = require("express");
const  mongoose  = require("mongoose");
const user = require("../models/user.models");
const bcrypt = require("bcryptjs");
const faker =require('@faker-js/faker')
const { signup, login } = require("../controllers/user.controllers");
const auth = require("../middleware/Auth");
const sports = require("../models/sports.models");
const sportsRouter = express.Router();
// for fake data 

function run(){
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
return games
}
sportsRouter.get('/sports',async(req,res)=>{
    try{ let data=await run()
        let alltables = await sports.insertMany(data)
           res.send(alltables)
         }
    catch(err){
        res.status(404).send(err.message)
    }
})
module.exports=sportsRouter