import { Box, Button, HStack, Icon, Input, Select, Text, VStack,Stack, Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getAllTables } from "../Api/Api";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import Tablescart from "../Components/Tablescart";

function Home(props) {
  const [Table, setTable] = useState([]);
  const [input,setinput] =useState()
  const [city,setcity] =useState()
  const [active,setactive] =useState()
  const [Rating,setRating] =useState()
  useEffect(() => {
    const id=setTimeout(() => {
        getAllTables({input,city,active,Rating})
        .then((res) => {
            setTable(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, 1000);
    return () => clearTimeout(id)
  }, [input,city,active,Rating]);
  return (
    <Box>
      <HStack w={"100%"}>
        <Box>
        <Input onChange={(event)=>{setinput(event.target.value)}}></Input>
        </Box>
        <Box>
        <Select onChange={(event)=>{setactive(event.target.value)}} placeholder="Select option">
          <option value="false">Active</option>
          <option value="true">Full</option>
        </Select>
        </Box>
        <Box>
        <Select onChange={(event)=>{setcity(event.target.value)}} placeholder="City">
          <option value="jaipur">Jaipur</option>
          <option value="pune">pune</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
        </Select>
        </Box>
        <HStack>
            <Box>
        <Text>Rating</Text>
            </Box>
            <Box>
        <Button onClick={()=>{setRating(-1)}}><Icon as={ChevronUpIcon} /></Button>
            </Box>
            <Box>
        <Button onClick={()=>{setRating(1)}}><Icon as= {ChevronDownIcon}/></Button>
            </Box>
        </HStack>  
      </HStack>
      <Grid templateColumns='repeat(4, 1fr)' gap={6}>
        {Table.length>0?Table.map((el,i)=>{
            return <Tablescart {...el} key={i}/>
        }):<Text>NO DATA FOUND</Text>
    }
      </Grid>
    </Box>
  );
}

export default Home;
