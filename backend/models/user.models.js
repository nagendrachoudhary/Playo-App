const mongoose =require('mongoose')

const Schema = new mongoose.Schema({
    username: {type:String,require:true},
    password: {type:String,require:true},
    requestedtables:{type:Array,default:[]},
    joinedtables:{type:Array,default:[]},
},{
    timestamps: true
})
const user =mongoose.model("user",Schema)
module.exports=user;