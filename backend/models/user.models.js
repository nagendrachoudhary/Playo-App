const mongoose =require('mongoose')

const Schema = new mongoose.Schema({
    username: {type:String,require:true},
    password: {type:String,require:true},
},{
    timestamps: true
})
const user =mongoose.model("user",Schema)
module.exports=user;