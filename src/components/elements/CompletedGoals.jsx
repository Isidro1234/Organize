import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import ProgressBar from './ProgressBar'

 export default function CompletedGoals({time, status , goalTitle,  percentage  }) {
  return (
    <div>
      <Box bg={"white"} height={"fit-content"} borderRadius={10} borderWidth={1} padding={5}>
        <Heading>{goalTitle}</Heading> 
        <Text fontSize={10} fontWeight={500} color={"#28d13eff"}>{status}</Text>  
        <ProgressBar color={"green"} percentage={percentage}/>
        <Text fontSize={10} color={"gray.500"}>completed {time} days ago</Text>    
    </Box>  
    </div>
  )
}
