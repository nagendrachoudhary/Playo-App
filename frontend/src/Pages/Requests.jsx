import { Box, Grid } from '@chakra-ui/react';
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
        <Box w={'100vh'} h={'100vh'}>

        <Grid  templateColumns='repeat(2, 1fr)' gap={6}>
            {allReq.map((req, index) => {
                return <Requestcart {...req} key={index}/>
            })}
        </Grid>
            </Box>
    );
}

export default Requests;