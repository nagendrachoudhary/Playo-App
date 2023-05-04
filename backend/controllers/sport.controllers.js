const mongoose  = require("mongoose");
const sports = require("../models/sports.models");
const user = require("../models/user.models");
async function createtable(data){
      await sports.create(data).then(()=>{
      }).catch((Error)=>{
        throw new Error
      })
}
async function updatetable(data){
    if(data.type=='accept'){
      let table=await sports.findById({_id:data.tableid})
      let users=await user.findById(data.userid)
      table.joinedplayers=table.joinedplayers+1
      table.joinedplayer.push(users)
       const id =new mongoose.Types.ObjectId(data.userid);
       let index;
       table.requests.map((el,i)=>{
        if(el.id==data.userid){
        index=i
        }
      })
       table.requests.splice(index,1)
       await sports.findByIdAndUpdate(data.tableid,{...table})
      users.requestedtables.map((el,i)=>{
        if(el.id==data.userid){
        index=i
        }
      })
      let joined=users.requestedtables[index]
      users.requestedtables.splice(index,1)
      users.joinedtables.push(joined)
      await user.findByIdAndUpdate(data.userid,{...users})
    }
    else{
      let table=await sports.findById({_id:data.tableid})
       const id =new mongoose.Types.ObjectId(data.userid);
       let index;
       table.requests.map((el,i)=>{
        if(el.id==data.userid){
        index=i
        }
      })
       table.requests.splice(index,1)
        await sports.findByIdAndUpdate(data.tableid,{...table})
      let users=await user.findById(data.userid)
      users.requestedtables.map((el,i)=>{
        if(el.id==data.userid){
        index=i
        }
      })
      users.requestedtables.splice(index,1)
       await user.findByIdAndUpdate(data.userid,{...users})
      console.log(users)
    }
}
module.exports={createtable,updatetable}