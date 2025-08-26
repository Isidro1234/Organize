import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import GoalCard from './GoalCard'

export default function LeftSidebar() {
  return (
    <div style={{flex:.5,backgroundColor:"white",borderWidth:1, borderRadius:10}}>
      
      <Box display={"flex"} flexDirection={"column"} gap={5}  borderRadius={10} padding={5}>
        <Heading>Current Goal</Heading>
            <GoalCard percentage={50} time={"30"} goalTitle={"Cybersecurity Course"} status={"on going"}/>
      </Box>
    </div>
  )
}
