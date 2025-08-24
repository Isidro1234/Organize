import { Box } from '@chakra-ui/react'
import React from 'react'

export default function Nav() {
  return (
    <Box height={"fit-content"} bg={"#5323bcff"} padding={5} >
        <ul style={{display:"flex", gap:10}}>
            <li>Home</li>
            <li>Add</li>
            <li>Login</li>
            <li>Ai Routine Generator</li>
        </ul>
    </Box>
  )
}
