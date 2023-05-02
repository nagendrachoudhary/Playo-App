const mongoose =require('mongoose')
const connect =()=>{ 
   mongoose.connect("mongodb+srv://nagendradangi105:nagendradangi105@cluster0.emfgmov.mongodb.net").then(()=>{
    console.log("Connected to mongoDB");
   }).catch(()=>{
    console.log("Unable to connect to mongoDB");
   })
    
    
}
module.exports=connect