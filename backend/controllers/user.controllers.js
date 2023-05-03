const Jwt  = require("jsonwebtoken");
const user = require("../models/user.models");
const bcrypt =require('bcryptjs')
const key="kghdgbkhybmbjdgbfjhmnenbvctftsadyasfagdfkjh"
function jwtoken(data){
    let token=Jwt.sign(data,key)
    return token
}

async function signup(userdata){
        const pass =await bcrypt.hash(userdata.password,10)
        userdata={...userdata,password:pass}
         let existing = await user.findOne({username:userdata.username})
         if(existing){
            throw new Error("Account already present")
         }
         else{
             await user.create({...userdata}) 
             return "account created"
            }
}
async function login(userdata){
if(userdata.username&&userdata.password){
  const users = await user.findOne({username:userdata.username})
  
  if(users){
    if(bcrypt.compareSync(userdata.password,users.password)){
        userdata={...userdata,password:users.password}
        console.log(typeof(userdata))
        let token = jwtoken(userdata)
       return token
    }
    else{
        throw new Error("check user name and password")
    }
  }
  else{
    throw new Error("check user name and password")
  }
}
else{
    throw new Error("Error")
}
}
module.exports={signup,login}