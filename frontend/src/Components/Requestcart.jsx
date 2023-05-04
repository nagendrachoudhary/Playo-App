import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { responserequest } from "../Api/Api";

function Requestcart(props) {
  const [State, setState] = useState()
  const handleclick=(event)=>{
       let data={}
       data.type=event.target.name
        data.userid=props.id
        data.tableid=props.tableid
        responserequest(data).then((res)=>{
        
        window.location.reload();
        })
  }
  return (
    <VStack w={'100%'}>
      <Box>
        <Text>Name:{props.username.toUpperCase()}</Text>
        <Text>Date:{props.date}</Text>
      </Box>
      <Box>
        <Text>City:{props.city.toUpperCase()}</Text>
        <Text>sport:{props.sports.toUpperCase()}</Text>
      </Box>
      <Box>
        <Button onClick={(event)=>{handleclick(event)}} name='reject' colorScheme="red">Reject</Button>
        <Button onClick={(event)=>{handleclick(event)}} name='accept' colorScheme="green">Accept</Button>
      </Box>
    </VStack>
  );
}

export default Requestcart;
