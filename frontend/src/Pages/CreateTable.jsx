import { Box, Button, Center, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { createnewtable } from "../Api/Api";

function CreateTable(props) {
  const [form, setform] = useState("");
  const handlechange = (event) => {
    setform({...form,[event.target.name]:event.target.value})
  };
  const createtable=()=>{
    createnewtable(form).then(()=>{
         
    }).catch((err)=>{
          console.log(err)
    })
  }
  console.log(form)
  return (
    <Center h={'100vh'} position={'relative'}>
      <Box w={'400px'} position={'absolute'} top={'25%'} boxShadow={'dark-lg'}  >

        <Input onChange={(event)=>{handlechange(event)}} name="description" placeholder="description"></Input>
        <Input onChange={(event)=>{handlechange(event)}} name="time" type="date"></Input>
        <Input onChange={(event)=>{handlechange(event)}} name="maxplayers" placeholder="MaxPlayers" type="number"></Input>
        <Input onChange={(event)=>{handlechange(event)}} name="city" type='search' placeholder="city" list="citys"/>
        <datalist id="citys">
          <option value="jaipur">Jaipur</option>
          <option value="pune">pune</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
        </datalist>
        
        <Input onChange={(event)=>{handlechange(event)}} name='img' placeholder="image url" list="ground"></Input>
        <datalist id="ground">
            <option value="https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200/lsci/db/PICTURES/CMS/86300/86316.jpg">random ground</option>
        </datalist>
        <Input onChange={(event)=>{handlechange(event)}} name='sports' placeholder="sport" list='sport'/>
        <datalist id="sport">
            
            <option value="football">football</option>
            <option value="basketball">basketball</option>
            <option value="baseball">baseball</option>
            <option value="tennis">tennis</option>
            
            <option value="cricket">cricket</option>

            <option value="hockey">hockey</option>
            <option value="badminton">badminton</option>
            </datalist>
          <Button onClick={()=>{createtable()}} variant={'solid'} w={'100%'} bg={'green'}>Create Table</Button>
     
      </Box>
    </Center>
  );
}

export default CreateTable;
