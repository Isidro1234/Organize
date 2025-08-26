import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import * as Icon from "react-bootstrap-icons"
export default function TaskPreviewCard({task,time}) {
  return (
    <div style={{display:"flex", alignItems:"center", width:"100%"}}>
      <Box display={"flex"} justifyContent={"space-between"} borderWidth={1} padding={2} width={"100%"} borderRadius={10}>
        <Heading fontSize={14}>{task}</Heading>
        <div style={{display:"flex", flexDirection:"row", alignItems:"center", gap:4}}>
          <Icon.Clock/> 
          <Text fontWeight={500} fontSize={10}>{time}</Text>
        </div>
      </Box>
      <Icon.Trash cursor={"pointer"} size={20} color='red'/>
      <Icon.PencilSquare cursor={"pointer"} size={20} color='green'/>
    </div>
    
  )
}
