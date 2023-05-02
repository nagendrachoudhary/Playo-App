import { Box, Input, Link, Text } from "@chakra-ui/react";
import React, { useState } from "react";

function Login(props) {
    const [Page, setPage] = useState('Login')
  return (
    <Box
      h={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      margin={"auto"}>
      <Box
        display={"flex"}
        boxShadow={"2xl"}
        m={"auto"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        w={"400px"}
        h={"400px"}
        position={'relative'}>
        <Text as={'b'} position={'absolute'} fontSize={'4xl'} top={'10'}>{Page}</Text>
        {Page=='Login'?<Box>
        <Input
          width={"300px"}
          variant={"outline"}
          placeholder="User Name"></Input>
        <Input
          width={"300px"}
          variant={"outline"}
          type="password"
          placeholder="Password"></Input>
        <Input type="submit" />
          </Box>:<Box>
        <Input
          width={"300px"}
          variant={"outline"}
          placeholder="Enter Name"></Input>
        <Input
          width={"300px"}
          variant={"outline"}
          type="password"
          placeholder="Create Password"></Input>
          <Input
          width={"300px"}
          variant={"outline"}
          type="password"
          placeholder="confrom password"></Input>
        <Input type="submit" />
          </Box>}
        <Link onClick={()=>{Page=='Login'?setPage("Signup"):setPage("Login")}}>{Page=='Login'?"Signup":"Login"}</Link>
      </Box>
    </Box>
  );
}

export default Login;
