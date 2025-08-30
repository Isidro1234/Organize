import { Box, Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import GoalCard from './GoalCard'
import { useLogic } from '../../states/useLogic'

export default function LeftSidebar() {
    const getgoals = useLogic((state)=>state.getGoals);
    const goals = useLogic((state)=>state.goals);
    const CurrentGoal = goals.filter((goal)=> goal.iscompleted === false)
    useEffect(()=>{
       async function handlegoals(){
        await getgoals()
       }
       handlegoals()
    },[])
  return (
    <div style={{flex:.5,backgroundColor:"white",borderWidth:1, borderRadius:10, height:"fit-content"}}>
      
      <Box display={"flex"} flexDirection={"column"} gap={5}  borderRadius={10} padding={5}>
        <Heading>Current Goal</Heading>
        {CurrentGoal?.map((item,index)=>{
            return(
              <GoalCard key={index} percentage={item?.completePercentage} time={item.duration}  goalTitle={item.title} status={item.completePercentage !== 100 && "on going"}/>  
            )
        })}
        
      </Box>
    </div>
  )
}
