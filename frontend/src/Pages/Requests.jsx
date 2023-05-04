import { Box, Center, Grid, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { getAllReq } from '../Api/Api';
import Requestcart from './../Components/Requestcart';

function Requests(props) {
    const [allReq, setallReq] = useState([])
    useEffect(() => {
      getAllReq().then((res)=>{
           setallReq(res.data)
           console.log(res)
      }).catch((err)=>{
            console.log(err)
      })   
    }, [])
    return (
        <Center w={'100vh'} m={'auto'} h={'100vh'}>
       

        <Grid  templateColumns='repeat(2, 1fr)' gap={6}>
            {allReq.length>0?allReq.map((req, index) => {
                return <Requestcart {...req} key={index}/>
            }):<Box><Image m={'auto'} src='https://assets.materialup.com/uploads/805362d3-e9d6-4aa7-b314-ed9dde22558b/preview.gif'/><p>No Data</p></Box>}
        </Grid>
            
            </Center>
    );
}

export default Requests;