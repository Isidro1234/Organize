import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import GoalCard from './GoalCard'
import CompletedGoals from './CompletedGoals'

export default function RightSidebar() {
  return (
    <div style={{flex:.5,backgroundColor:"white",borderWidth:1, borderRadius:10}}>
      <Box display={"flex"} flexDirection={"column"} gap={5} borderRadius={10} padding={5}>
        <Heading>Completed Goals</Heading>
        <CompletedGoals percentage={100} time={"30"} status={"completed"} goalTitle={"Buy a Car"}/>
      </Box>
    </div>
  )
}
