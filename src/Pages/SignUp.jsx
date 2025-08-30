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
    <div style={{width:"100%",display:"flex",flexDirection:"row-reverse", height:"90vh", alignItems:"center"}}>
        <Box  className='Log' height={"100%"} justifyContent={"center"}  bg={"white"} padding={10} display={"flex"} gap={15} flexDirection={"column"}>
            
         <Heading textAlign={"center"} lineHeight={.5} fontSize={20}>Sign up to Inta Tools</Heading>
        <Heading  textAlign={"center"} fontWeight={300} size={10}  fontSize={14}>Welcome back👋 Sign Up below</Heading>
        <VStack gap={4}>
            <Input padding={7} paddingLeft={5} onChange={(e)=>setUsername(e.target.value)} _hover={{borderColor:"green.400"}} placeholder='username' />
            <Input padding={7} paddingLeft={5} onChange={(e)=>setEmail(e.target.value)} _hover={{borderColor:"green.400"}} placeholder='Email' />
            <Input padding={7} paddingLeft={5} onChange={(e)=>setPassword(e.target.value)} _hover={{borderColor:"green.400"}} placeholder='Password' />
            <Button padding={7} onClick={handleSign} bg={"black"} width={"100%"}>Sign</Button>
        </VStack>
        <Text  fontSize={13}>If you already have an account<Link color='blue' to={"/Login"}> clique here</Link></Text>   </Box >
          <div className='video' style={{position:"relative", height:"100%", flex:1}}>
            <video playsInline={true}  loop={true} muted={true} autoPlay={true} style={{position:"absolute",zIndex:-1, top:0,height:"120%",transform:"translateX(-70px) translateY(-70px) rotateZ(4deg)", objectFit:"cover"}} width={"100%"} height={"100%"} src='https://www.pexels.com/download/video/18069863/'/>
          </div>
        </div>
    
  )
}
