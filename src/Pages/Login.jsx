import { Box, Button, Heading, HStack, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router'
import { useAuthentic } from '../context/AuthContext'

export default function Login() {
    const { isAuthenticated ,  setAuthenticated} = useAuthentic()
    function handleLogin (){
        setAuthenticated(true)
        console.log(isAuthenticated)
    }
  return (
      <Box maxW={500} maxH={350}  bg={"white"} borderRadius={20} padding={10} display={"flex"} gap={15} flexDirection={"column"}>
        <Heading >Organize</Heading>
        <Heading fontWeight={500} size={10} fontSize={10}>Login 👋</Heading>
        <VStack>
            <Input _hover={{borderColor:"green.400"}} placeholder='Email' />
            <Input _hover={{borderColor:"green.400"}} placeholder='Password'/>
            <Button onClick={handleLogin} bg={"black"} width={"100%"}>Login</Button>
        </VStack>
        <Text  fontSize={10}>If you don't already have an account<Link color='blue' to={"/Auth/SignUp"}> clique here</Link></Text>
      </Box>
  )
}
