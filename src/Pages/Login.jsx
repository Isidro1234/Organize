import { Box, Button, Heading, HStack, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router'
import { useAuthentic } from '../context/AuthContext'
import { useAuth } from '../states/useAuth';

export default function Login() {
    const { isAuthenticated ,  setAuthenticated} = useAuthentic();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const Login = useAuth((state)=>state.Login);
    async function handleLogin (){
        const result = await Login(email, password)
        if(result){
            setAuthenticated(true)
            console.log(isAuthenticated)
        }
    }
  return (
    <div style={{width:"100%",display:"flex", height:"80%", alignItems:"center", justifyContent:"center"}}>
        <Box  maxW={500} maxH={350} borderWidth={1}  bg={"white"} borderRadius={20} padding={10} display={"flex"} gap={15} flexDirection={"column"}>
        <Heading textAlign={"center"}>Organizex</Heading>
        <Heading textAlign={"center"} fontWeight={500} size={10} fontSize={10}>Login 👋</Heading>
        <VStack>
            <Input onChange={(e)=>setEmail(e.target.value)} _hover={{borderColor:"green.400"}} placeholder='Email' />
            <Input onChange={(e)=>setPassword(e.target.value)} _hover={{borderColor:"green.400"}} placeholder='Password'/>
            <Button onClick={handleLogin} bg={"black"} width={"100%"}>Login</Button>
        </VStack>
        <Text  fontSize={10}>If you don't already have an account<Link color='blue' to={"/SignUp"}> clique here</Link></Text>
      </Box>
    </div>
      
  )
}
