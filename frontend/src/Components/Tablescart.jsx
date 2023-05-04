import { Box, Button, HStack, Image, Input, Text, useToast } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { Jointable } from '../Api/Api';
import { AuthContext } from './../Context/Auth';

function Tablescart(props) {
    const toast=useToast()
    let {user}=useContext(AuthContext)
    let userintable=[]
    if(user!=null){
          userintable=user.requestedtables.filter(el => el._id ==props._id);
    }
    const handleclick=(id)=>{
       Jointable(id).then(()=>{
        let button=document.getElementById(props._id)
        button.setAttribute("disabled", true);
        toast({
            title: "Request Send To Table Owner",
            position:'top',
            status: 'success',
            isClosable: true,
          })
       })
    }
    let time=props.createdAt.split("T")
    return (
        <Box>

        <Box width={'300px'} h={'390px'}  boxShadow={'dark-lg'}>
            <Image w='100%' h={'250px'} src={props.img}/>
            <Text noOfLines={1}>{props.description}</Text>
            <Text bg={'red.400'}  >createdAt={time[0]}</Text>
            <Text bg={'teal.400'}noOfWords={4} noOfLines={1}>{props.time}</Text>
            <HStack>
            <Text>players:-{`${props.maxplayers}/${props.joinedplayers}`}</Text>
            <Text>{props.city}</Text>
            <Text>{props.sports}</Text>
            <Text>rating:-{props.rating}</Text>
            </HStack>
            <Button colorScheme='blackAlpha' id={props._id} w={'90%'}  m='auto' isDisabled={props.maxplayers==props.joinedplayers||userintable.length>0}  variant={'solid'}  onClick={()=>{handleclick(props._id)}}>Join</Button>
        </Box>
        </Box>
    );
}

export default Tablescart;