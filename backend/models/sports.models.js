const mongoose =require('mongoose')

const Schema = new mongoose.Schema({
    description:{type:String,require:true},
    time:{type:String,require:true},
    maxplayers:{type:Number,require:true},
    joinedplayers:{type:Number,default:0},
    city:{type:String,require:true},
    rating:{type:Number,default:5},
    img:{type:String,require:true},
    sports:{type:String,require:true},
    joinedplayer:{type:Array,default:[]},
    requests:{type:Array,default:[]},
    active:{type:Boolean,default:false},
    owner:{
        username:{type:String,require:true},
        id:{type:String,require:true}
    }
},{
    timestamps: true
})
const sports =mongoose.model("sports",Schema)
module.exports=sports;