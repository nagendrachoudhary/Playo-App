const express = require('express')
const cors = require('cors');
const connect = require('./config/db');
const userRouter = require('./routes/user.routes');
const app=express();
app.use(cors());
app.use(express.json());
app.use('/',userRouter)

app.listen(8080,()=>{
    connect()
    console.log("server Start on http://localhost:8080")
})