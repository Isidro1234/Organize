import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import ProgressBar from './ProgressBar'

export default function GoalCard({time, status , goalTitle , percentage }) {
  return (
    <Box bg={"white"} height={"fit-content"} borderRadius={10} borderWidth={1} padding={5}>
        <Heading>{goalTitle}</Heading> 
        <Text fontSize={10} fontWeight={500} color={"#2896d1ff"}>{status}</Text>          
        <ProgressBar color={"blue"} percentage={percentage}/>
        <Text fontSize={10} color={"gray.500"}>complete in {time} days ago</Text>    
    </Box>  
  )
}
