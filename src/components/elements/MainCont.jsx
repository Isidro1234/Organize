import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import ProgressBar from './ProgressBar'

export default function MainCont() {
  return (
    <div style={{display:"grid", gridTemplateColumns:"1fr", gap:10, padding:10}}> 
        <Box bg={"white"} height={"fit-content"} borderRadius={10} borderWidth={1} padding={5}>
               <Heading>Task Title</Heading> 
               <Text fontSize={10} fontWeight={500}>Completed</Text>
               <ProgressBar percentage={50}/>
               <Text>30 days left</Text>    
        </Box>  
    </div>
  )
}
