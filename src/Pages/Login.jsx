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
    <div style={{width:"100%",display:"flex", height:"90vh", alignItems:"center"}}>
        <Box className='Log'  height={"100%"} justifyContent={"center"}  bg={"white"}  padding={10} display={"flex"} gap={15} flexDirection={"column"}>
        
        <Heading textAlign={"center"} lineHeight={.5} fontSize={20}>Login to Inta Tools</Heading>
        <Heading textAlign={"center"} fontWeight={300} size={14} fontSize={14}>Welcome back 👋 please log in below</Heading>
        <VStack gap={5}>
            <Input padding={7} paddingLeft={5} onChange={(e)=>setEmail(e.target.value)} _hover={{borderColor:"green.400"}} placeholder='Email' />
            <Input padding={7} paddingLeft={5} onChange={(e)=>setPassword(e.target.value)} _hover={{borderColor:"green.400"}} placeholder='Password'/>
            <Button padding={7} onClick={handleLogin} bg={"black"} width={"100%"}>Login</Button>
        </VStack>
        <Text  fontSize={13}>If you don't already have an account<Link color='blue' to={"/SignUp"}> clique here</Link></Text>
      </Box >
      <div className='video'  style={{ height:"100%"}}>
        <video loop={true} muted={true} autoPlay={true} style={{position:"absolute",zIndex:-1, top:0,height:"120%",transform:"translateX(70px) translateY(-70px) rotateZ(4deg)", objectFit:"cover"}} width={"100%"} height={"100%"} src='https://www.pexels.com/download/video/18069236/'/>
      </div>
    </div>
      
  )
}
