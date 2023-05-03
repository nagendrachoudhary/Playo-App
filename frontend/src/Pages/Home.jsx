import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { getAllTables } from '../Api/Api';

function Home(props) {
    const [Table, setTable] = useState([])
    useEffect(() => {
      getAllTables().then((res)=>{
         setTable(res.data)
      }).catch((err)=>{
        console.log(err)
      })
    },[])
    console.log(Table)
    return (
        <Box h={'5000px'} >
            
        </Box>
    );
}

export default Home;