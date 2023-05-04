import { Box, Button, HStack, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, useToast } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { Jointable, playerInMyTable } from '../Api/Api';
import { AuthContext } from './../Context/Auth';
import { useNavigate } from 'react-router-dom';

function Tablescart(props) {
    console.log(props)
    const navigate=  useNavigate()
    const toast=useToast()
    let {user}=useContext(AuthContext)
    const [Players, setPlayers] = useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()
    let userintable=[]
    let joined=[]
    if(user!=null){
          userintable=user.requestedtables.filter(el => el._id ==props._id);
          joined=user.joinedtables.filter(el => el._id ==props._id)
    }
    const playerintable=()=>{
        onOpen()
       setPlayers(props.joinedplayer) 
    }
    const handleclick=(id)=>{
        
       Jointable(id).then((res)=>{
        let button=document.getElementById(props._id)
        button.setAttribute("disabled", true);
        toast({
            title: "Request Send To Table Owner",
            position:'top',
            status: 'success',
            isClosable: true,
          })
       }).catch(
        console.log("err")
      )
    }
    let time=props.createdAt.split("T")
    return (
        <Box>
           <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>All Players</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Total slot:-{props.maxplayers}</Text>
            <Text>Total Players:-{props.joinedplayers}</Text>
            {Players.map((el,i)=>{
                return <Box>
                    <Text>{el.username}</Text>
                    </Box>
            })}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
        <Box width={'300px'} h={'450px'}  boxShadow={'dark-lg'}>
            <Image w='100%' h={'250px'} src={props.img}/>
            <Text noOfLines={1}>{props.description}</Text>
            <Text bg={'red.400'}  >createdAt={time[0]}</Text>
            <Text bg={'teal.400'} noOfLines={1}>{props.time}</Text>
            <HStack>
            <Text>players:-{`${props.maxplayers}/${props.joinedplayers}`}</Text>
            <Text>{props.city}</Text>
            <Text>{props.sports}</Text>
            <Text>rating:-{props.rating}</Text>
            </HStack>
            <Button isDisabled={joined.length==0} onClick={()=>{playerintable()}}>Show All Player</Button>
            <Button colorScheme='blackAlpha' id={props._id} w={'90%'}  m='auto' isDisabled={props.maxplayers==props.joinedplayers||userintable.length>0||joined.length>0}  variant={'solid'}  onClick={()=>{handleclick(props._id)}}>Join</Button>
        </Box>
        </Box>
    );
}

export default Tablescart;