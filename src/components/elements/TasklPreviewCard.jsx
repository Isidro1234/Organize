import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import * as Icon from "react-bootstrap-icons"
export default function TaskPreviewCard({task,date, onclick , resourceTask,EndTime , StartTime}) {
  return (
    <div style={{display:"flex", alignItems:"center", width:"100%"}}>
      <Box display={"flex"} justifyContent={"space-between"} borderWidth={1} padding={2} width={"100%"} borderRadius={10}>
        <VStack padding={4}>
          <Heading fontSize={14} lineHeight={.5}>{task}</Heading>
          <Text fontSize={10} fontWeight={500}>{date}</Text>
          {resourceTask &&
          <Icon.FileEarmarkEasel/>
          }
          
        </VStack>
        <div style={{display:"flex", flexDirection:"row", alignItems:"center", gap:4}}>
          <Icon.Clock/> 
          <Text fontWeight={500} fontSize={10}>{StartTime} - {EndTime}</Text>
          <Icon.Trash onClick={onclick} cursor={"pointer"} size={20} color='red'/>
        </div>
        
      </Box>
      
    </div>
    
  )
}
