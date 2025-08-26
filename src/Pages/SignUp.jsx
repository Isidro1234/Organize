import { Box, Button, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router'
import { useAuthentic } from '../context/AuthContext';
import { useAuth } from '../states/useAuth';

export default function SignUp() {
    const { isAuthenticated ,  setAuthenticated} = useAuthentic();
        const [username, setUsername] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("")
        const Login = useAuth((state)=>state.SignUp);
        async function handleSign (){
            const result = await Login(username, email, password)
            if(result){
                setAuthenticated(true)
                console.log(isAuthenticated)
            }
        }
  return (
    <Box bg={"white"} borderRadius={20} padding={10} display={"flex"} gap={15} flexDirection={"column"}>
        <Heading >Organize</Heading>
        <Heading fontWeight={500} size={10} fontSize={10}>SignUp 👋</Heading>
        <VStack>
            <Input onChange={(e)=>setUsername(e.target.value)} _hover={{borderColor:"green.400"}} placeholder='username' />
            <Input onChange={(e)=>setEmail(e.target.value)} _hover={{borderColor:"green.400"}} placeholder='Email' />
            <Input onChange={(e)=>setPassword(e.target.value)} _hover={{borderColor:"green.400"}} placeholder='Password' />
            <Button onClick={handleSign} bg={"black"} width={"100%"}>Login</Button>
        </VStack>
        <Text  fontSize={10}>If you already have an account<Link color='blue' to={"/Login"}> clique here</Link></Text>
      </Box>
  )
}
