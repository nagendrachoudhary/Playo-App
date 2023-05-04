import { Alert, AlertIcon, Box, Input, Link, Text, useToast,  } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { CreateAccount, LoginApi, getLoggedInUser } from "../Api/Api";
import { AuthContext } from "../Context/Auth";
import { Navigate, useNavigate } from "react-router-dom";
function Login(props) {
  const [Page, setPage] = useState("Login");
  const [Login, setLogin] = useState({});
  const [Signup, setSignup] = useState({});
  const { login } = useContext(AuthContext);
  const toast = useToast()
  const navigate=useNavigate()
  const handleChange = (event) => {
    setLogin({ ...Login, [event.target.name]: event.target.value });
  };
  const handlesubmit = () => {
    login(Login).then(()=>{
     navigate('/')
    })
  };
  const handleChangesignup = (event) => {
    setSignup({ ...Signup, [event.target.name]: event.target.value });
  };
  console.log(Login)
  const handlesubmitCreate = () => {
    CreateAccount({ ...Signup })
      .then((res) => {
        toast({
          title: "Account created successfully",
          position:'top',
          status: 'success',
          isClosable: true,
        })
        setPage('Login')
      })
      .catch((err) => {
        console.log(err.response.data)
       toast({
          title: `${err.response.data}`,
          position:'top',
          status: 'error',
          isClosable: true,
        })
      });
  };
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
        >
        <Text as={"b"} fontSize={"4xl"} top={"10"}>
          {Page}
        </Text>
        {Page == "Login" ? (
          <Box>
            <form>
            <Input
              onChange={(event) => {
                handleChange(event);
              }}
              name="username"
              defaultValue={""}
              width={"300px"}
              variant={"outline"}
              placeholder="User Name"></Input>
            <Input
              onChange={(event) => {
                handleChange(event);
              }}
              defaultValue={""}
              name="password"
              width={"300px"}
              variant={"outline"}
              type="password"
              placeholder="Password"></Input>
            <Input
              onClick={() => {
                handlesubmit();
              }}
              type="submit"
              />
              </form>
          </Box>
        ) : (
          <Box>
            <Input
              onChange={(event) => {
                handleChangesignup(event);
              }}
              defaultValue={""}
              name="username"
              width={"300px"}
              variant={"outline"}
              placeholder="Enter Name"></Input>
            <Input
              onChange={(event) => {
                handleChangesignup(event);
              }}
              defaultValue={""}
              name="password"
              width={"300px"}
              variant={"outline"}
              type="password"
              placeholder="Create Password"></Input>
            <Input
              onChange={(event) => {
                handleChangesignup(event);
              }}
              defaultValue={""}
              name="confrompassword"
              width={"300px"}
              variant={"outline"}
              type="password"
              placeholder="confrom password"></Input>
            <Input
              onClick={() => {
                handlesubmitCreate();
              }}
              type="submit"
            />
          </Box>
        )}
        <Link
          onClick={() => {
            Page == "Login" ? setPage("Signup") : setPage("Login");
          }}>
          {Page == "Login" ? "Signup" : "Login"}
        </Link>
      </Box>
    </Box>
  );
}

export default Login;
