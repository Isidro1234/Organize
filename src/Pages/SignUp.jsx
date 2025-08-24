import { Box, Button, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router'

export default function SignUp() {
  return (
    <Box bg={"white"} borderRadius={20} padding={10} display={"flex"} gap={15} flexDirection={"column"}>
        <Heading >Organize</Heading>
        <Heading fontWeight={500} size={10} fontSize={10}>SignUp 👋</Heading>
        <VStack>
            <Input _hover={{borderColor:"green.400"}} placeholder='Email' />
            <Input _hover={{borderColor:"green.400"}} placeholder='Password' />
            <Button bg={"black"} width={"100%"}>Login</Button>
        </VStack>
        <Text  fontSize={10}>If you already have an account<Link color='blue' to={"/Auth"}> clique here</Link></Text>
      </Box>
  )
}
